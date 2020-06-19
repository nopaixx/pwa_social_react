import React, { Component } from 'react';

import { getMovieRows } from '../getMovie';

import { withRouter } from "react-router";

class PinnedList extends Component {

	render() {
		let movies;
		if (this.props.movies) {
			const url = '';
			movies = getMovieRows(this.props.movies, url);
		}
		return (
			<>
				<h1 className="movieShowcase__heading">
					{this.props.title}
				</h1>
				<div className="movieShowcase__container">
					{movies}
				</div>
			</>
		);
	}
}
export default withRouter(PinnedList);
