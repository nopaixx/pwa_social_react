import MovieGenre from './components/MovieGenre';
import React from 'react';

export function getMovieRows(movies, url, history) {
	const movieRow = movies.map(movie => {
		/*
		let movieImageUrl =
			'https://image.tmdb.org/t/p/w500/' +
			movie.backdrop_path;

		if (
			url ===
			`/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
		) {
			movieImageUrl =
				'https://image.tmdb.org/t/p/original/' +
				movie.poster_path;
		}*/
		let movieImageUrl = movie.snippet.thumbnails.standard.url;
		let movieId = movie.contentDetails.videoId;
		let url = movieImageUrl;
		//if (movie.poster_path && movie.backdrop_path !== null) {
		const movieComponent = (
			<MovieGenre
				history={history}
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
