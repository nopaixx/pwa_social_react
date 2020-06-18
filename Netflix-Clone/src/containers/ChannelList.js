import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTrending } from '../store/actions/index';
import { getMovieRows } from '../getMovie';

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
				url
			);
		}
		return (
			<>
				<h1 className="movieShowcase__heading">
					{this.props.play_list
						? this.props.play_list.snippet
								.localized.title
						: ''}
				</h1>
				<div className="movieShowcase__container">
					{movies}
				</div>
			</>
		);
	}
}

const mapStateToProps = state => {
	return { trending: state.trending };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchTrending }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
