const functions = require("firebase-functions");
const admin = require("firebase-admin");

const app = require("express")();

admin.initializeApp();
// Your web app's Firebase configuration
const fireConfig = require("./config");
const firebase = require("firebase");

firebase.initializeApp(fireConfig.firebaseConfig);

const db = admin.firestore();

app.get("/screams", (req, res) => {
	db.collection("screams")
		.orderBy("createdAt", "desc")
		.get()
		.then(data => {
			let screams = [];
			data.forEach(doc => {
				screams.push({
					screamId: doc.id,
					body: doc.data().body,
					userHandle: doc.data().userHandle,
					createdAt: doc.data().createdAt
				});
			});
			return res.json(screams);
		})
		.catch(err => console.error(err));
});

const FBAuth = (req, res, next) => {
	let idToken;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer ")
	) {
		idToken = req.headers.authorization.split("Bearer ")[1];
	} else {
		console.error("Not token found");
		return res.status(403).json({ error: "Unauthorized" });
	}

	admin.auth()
		.verifyIdToken(idToken)
		.then(decodedToken => {
			req.user = decodedToken;
			console.log(decodedToken);
			return db
				.collection("users")
				.where("userId", "==", req.user.uid)
				.limit(1)
				.get();
		})
		.then(data => {
			req.user.handle = data.docs[0].data().handle;
			return next();
		})
		.catch(err => {
			console.error("Error while verifying token ", err);
			return res.status(403).json(err);
		});
};

app.post("/scream", FBAuth, (req, res) => {
	const newScream = {
		body: req.body.body,
		userHandle: req.user.handle,
		createdAt: new Date().toISOString()
	};

	db.collection("screams")
		.add(newScream)
		.then(doc => {
			res.json({
				message: `document ${doc.id} created successfully`
			});
		})
		.catch(err => {
			console.error(err);
			res.status(500).json({ error: "something went wrong" });
		});
});
const isEmpty = str => {
	if (str.trim() === "") return true;
	else return false;
};

const isEmail = email => {
	// TODO add email reg ex
	return true;
};
app.post("/signup", (req, res) => {
	let i_token, i_userId;
	const newUser = {
		email: req.body.email,
		password: req.body.password,
		confirmPassword: req.body.confirmPassword,
		handle: req.body.handle
	};
	let errors = {};

	if (isEmpty(newUser.email)) {
		errors.email = "Email is empty";
	} else if (!isEmail(newUser.email)) {
		errors.email = "Must be a valid email";
	}

	if (isEmpty(newUser.password)) {
		errors.password = "Must not be empty";
	}
	if (newUser.password !== newUser.confirmPassword) {
		errors.confirmPassword = "Password must be the same";
	}
	if (isEmpty(newUser.handle)) {
		errors.handle = "Must not be empty";
	}

	if (Object.keys(errors).length > 0) {
		return res.status(400).json(errors);
	}
	db.doc(`/users/${newUser.handle}`)
		.get()
		.then(doc => {
			if (doc.exists) {
				return res.status(400).json({
					handle: "this handle is already taken"
				});
			} else {
				return firebase
					.auth()
					.createUserWithEmailAndPassword(
						newUser.email,
						newUser.password
					);
			}
		})
		.then(data => {
			i_userId = data.user.uid;
			return data.user.getIdToken();
		})
		.then(token => {
			i_token = token;
			const userCredentials = {
				handle: newUser.handle,
				email: newUser.email,
				createdAt: new Date().toISOString(),
				userId: i_userId
			};
			return db
				.doc(`/users/${newUser.handle}`)
				.set(userCredentials);
		})
		.then(data => {
			return res.status(201).json({ token: i_token });
		})
		.catch(err => {
			console.error(err);
			if (err.code === "auth/email-already-in-use") {
				return res.status(400).json({
					emial: "Email is already in user"
				});
			} else {
				return res
					.status(500)
					.json({ error: err.code });
			}
		});
});

app.post("/login", (req, res) => {
	const user = {
		email: req.body.email,
		password: req.body.password
	};

	let errors = {};
	if (isEmpty(user.email)) errors.email = "Must not be empty";
	if (isEmpty(user.password)) errors.password = "Must not be empty";
	if (Object.keys(errors).length > 0) {
		return res.status(400).json(errors);
	}

	firebase.auth()
		.signInWithEmailAndPassword(user.email, user.password)
		.then(data => {
			return data.user.getIdToken();
		})
		.then(token => {
			return res.json({ token });
		})
		.catch(err => {
			console.error(err);
			if (err.code === "auth/wrong-password") {
				return res.status(400).json({
					general:
						"Wrong credentials, please try again"
				});
			} else {
				return res
					.status(500)
					.json({ error: err.code });
			}
		});
});

exports.api = functions.region("europe-west1").https.onRequest(app);
