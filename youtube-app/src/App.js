import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//Components
import Navbar from "./components/Navbar";
//Pages
import home from "./pages/home";
import signup from "./pages/signup";
import login from "./pages/login";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#4f5b62",
			main: "#263238",
			dark: "#000a12",
			constratText: "#fff"
		},
		secondary: {
			light: "#eceff1",
			main: "#ffffff",
			dark: "#babdbe",
			contrastText: "#fff"
		}
	},
	typography: {
		useNextVariants: true
	}
});

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<Navbar />
					<div className="container">
						<Switch>
							<Route
								exact
								path="/"
								component={home}
							/>
							<Route
								exact
								path="/login"
								component={
									login
								}
							/>
							<Route
								exact
								path="/signup"
								component={
									signup
								}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		</MuiThemeProvider>
	);
}

export default App;
