import React, { useState } from 'react';
import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';
import YouTube from 'react-youtube';

export default function Header(props) {
	const [play, setPlay] = useState(false);

	let videoName, videoDescription, videoThum;

	try {
		videoThum = props.movie.snippet.thumbnails.maxres.url;
		videoDescription = props.movie.snippet.description;
		videoName = props.movie.snippet.title;
	} catch (err) {
		console.log('Header Error', err);
	}

	const backgroundStyle = {
		backgroundSize: 'contain',
		//		backgroundImage: `url(${videoThum})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		marginTop: '6rem'
	};
	const imageStyle = {
		width: '100vw'
		//		height: '65rem'
	};
	const playVideo = () => {
		console.log(play);
		setPlay(!play);
		console.log(play);
	};
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
			rel: 0
		}
	};
	console.log('AL-2 Header', props, backgroundStyle);
	return (
		<header className="header" style={backgroundStyle}>
			<div
				class="hytPlayerWrapOuter"
				style={{
					height: '100%',
					width: '100%'
				}}
			>
				<div
					class="hytPlayerWrap"
					style={{
						height: '100%',
						width: '100%'
					}}
				>
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${props.movie.contentDetails.videoId}?rel=0&enablejsapi=1`}
						frameborder="0"
						allowfullscreen="true"
					></iframe>
				</div>
			</div>
		</header>
	);
}
