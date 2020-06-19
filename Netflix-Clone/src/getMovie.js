import MovieGenre from './components/MovieGenre';
import React from 'react';

export function getMovieRows(movies, url, history) {
	const movieRow = movies.map(movie => {
		let movieImageUrl = movie.snippet.thumbnails.standard.url;
		let movieId = movie.contentDetails.videoId;
		let url = movieImageUrl;
		const movieComponent = (
			<MovieGenre
				key={movieId}
				url={url}
				posterUrl={movieImageUrl}
				movie={movie}
			/>
		);

		return movieComponent;
		//}
	});

	return movieRow;
}
