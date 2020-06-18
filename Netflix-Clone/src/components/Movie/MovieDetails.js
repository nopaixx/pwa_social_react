import React from 'react';

import Aux from '../../hoc/Aux';
import AddIcon from '../../static/images/add.svg';
import PlayIcon from '../../static/images/play-button.svg';

export default function MovieDetails(props) {
	console.log("AL--recibed", props)

	if (!props.movie.snippet){
		return ''
	}
        const backgroundStyle = {
                	backgroundSize: 'contain',
	                backgroundImage: `url(${props.movie.snippet.thumbnails.maxres.url})`,
        	        backgroundPosition: 'center',
        	        backgroundRepeat: 'no-repeat',
	};
	return (
		<Aux>
	                <header className="header" style={backgroundStyle}>
				<div className="modal__container">
					<h1 className="modal__title">
						{props.movie.snippet.title}
					</h1>
				
					<p className="modal__info">
						Release date:{' '}
						{props.movie.release_date ||
							props.movie.first_air_date}{' '}
						Runtime:{' '}
						{props.movie.runtime ||
							props.movie.episode_run_time}
						m
					</p>
					<p className="modal__episode">
						{props.movie.number_of_episodes
							? ' Episodes: ' +
							  props.movie.number_of_episodes
							: ''}
						{props.movie.number_of_seasons
							? ' Seasons: ' +
							  props.movie.number_of_seasons
							: ''}
					</p>
					<button className="modal__btn modal__btn--red">
						<PlayIcon className="modal__btn--icon" />
						Play
					</button>
					<p className="modal__overview">
						{props.movie.snippet.description}
					</p>
				</div>
                	</header>
		</Aux>
	);
}
