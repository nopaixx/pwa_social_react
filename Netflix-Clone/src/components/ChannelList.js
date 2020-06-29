import React, { Component } from 'react';

import { getMovieRows } from '../getMovie';
import { withRouter } from 'react-router';

class ChannelList extends Component {
	componentWillMount() {
		//		this.props.fetchTrending();
	}

	render() {
		let movies;
		if (this.props.play_list.videos) {
			const url = '';
			movies = getMovieRows(
				this.props.play_list.videos.items,
				url,
				this.props.history
			);
		}
		const url = `listview/${this.props.id}`;
		return (
			<>
				<div
					onClick={() => {
						console.log('Al-click');
						this.props.history.push(url);
					}}
				>
					<h1 className="movieShowcase__heading">
						{this.props.play_list
							? `${this.props.play_list.snippet.localized.title} >`
							: ''}
					</h1>
				</div>
				<div className="movieShowcase__container">{movies}</div>
			</>
		);
	}
}

export default withRouter(ChannelList);
