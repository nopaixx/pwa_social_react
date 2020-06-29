import React, { useState } from 'react';
import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';
import YouTube from 'react-youtube';
import YoutubeVideo from './YoutubeVideo';

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
	return (
		<header className="header" style={backgroundStyle}>
			<YoutubeVideo
				video_src={`https://www.youtube.com/embed/${props.movie.contentDetails.videoId}?rel=0&enablejsapi=1`}
			/>
		</header>
	);
}
