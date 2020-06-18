import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMovieRows } from '../getMovie';

class PinnedList extends Component {
	componentWillMount() {
		//		this.props.fetchNetflixOriginals();
		// this.props.fetchList(this.props.playlist_id);
	}

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
const mapStateToProps = state => {
	//return { moviesREMOVEDDDDD: state.netflixOriginals };
	return { moviesREMOVEDDDDD: undefined };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(PinnedList);
