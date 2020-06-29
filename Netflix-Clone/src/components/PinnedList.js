import React, { Component } from 'react';

import { getMovieRows } from '../getMovie';

import { withRouter } from 'react-router';

class PinnedList extends Component {
	render() {
		let movies;
		if (this.props.movies) {
			const url = '';
			movies = getMovieRows(this.props.movies, url);
		}
		const url = `listview/${this.props.id}`;
		return (
			<>
				<div
					onClick={() => {
						this.props.history.push(url);
					}}
				>
					<h1 className="movieShowcase__heading">
						{this.props.title} >
					</h1>
				</div>
				<div className="movieShowcase__container">{movies}</div>
			</>
		);
	}
}
export default withRouter(PinnedList);
