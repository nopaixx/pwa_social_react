import React from 'react';

import Aux from '../../hoc/Aux';
import AddIcon from '../../static/images/add.svg';
import PlayIcon from '../../static/images/play-button.svg';
import YoutubeVideo from '../YoutubeVideo';

export default function MovieDetails(props) {

	if (!props.movie.snippet) {
		return '';
	}
	const backgroundStyle = {
		backgroundSize: 'contain',
		//              backgroundImage: `url(${videoThum})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		marginTop: '6rem',
		width: '100%'
	};

	return (
		<Aux>
			<header className="header" style={backgroundStyle}>
				<YoutubeVideo
					video_src={`https://www.youtube.com/embed/${props.movie.contentDetails.videoId}?rel=0&enablejsapi=1`}
				/>
			</header>
		</Aux>
	);
}
