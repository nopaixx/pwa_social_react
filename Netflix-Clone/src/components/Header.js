import React from 'react';

import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';

export default function Header(props) {
	let videoName, videoDescription, videoThum;
	try {
		console.log(props);
		videoThum = props.movie.snippet.thumbnails.maxres.url;
		videoDescription = props.movie.snippet.description;
		videoName = props.movie.snippet.title;
	} catch (err) {}
	const backgroundStyle = {
		backgroundSize: 'contain',
		backgroundImage: `url(${videoThum})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	};
	const imageStyle = {
		width: '100vw',
//		height: '65rem'
	}

	console.log("AL-2 Header", props, backgroundStyle);
	return (
		<header className="header" style={backgroundStyle}>
			<div className="header__container">
				<button
					onClick={() => alert('not a movie!')}
					className="header__container-btnPlay"
				>
					<PlayLogo className="header__container-btnMyList-play" />
					Play
				</button>
			</div>
		</header>
	);
}
