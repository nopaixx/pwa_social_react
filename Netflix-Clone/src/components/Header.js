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
		backgroundSize: 'cover',
		backgroundImage: `url(${videoThum})`,
		backgroundPosition: 'center'
	};

	console.log(props, backgroundStyle);
	return (
		<header style={backgroundStyle} className="header">
			<div className="header__container">
				<button
					onClick={() => alert('not a movie!')}
					className="header__container-btnPlay"
				>
					<PlayLogo className="header__container-btnMyList-play" />
					Play
				</button>
			</div>
			<div className="header--fadeBottom"></div>
		</header>
	);
}
