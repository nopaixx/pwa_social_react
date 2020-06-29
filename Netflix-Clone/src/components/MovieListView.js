import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../components/UI/Modal';
import Navbar from './Navbar';
import MovieDetails from '../components/Movie/MovieDetails';

export default class MovieListView extends Component {
	render() {
		console.log('AL-2-MovieListView:::', this.props);
		let movies;
		if (this.props.movies) {
			const url = '';
			movies = getMovieRows(this.props.movies, url);
		}

		let videoCatId = this.props.match.params.videoCatId;
		console.log('AL-2-movielistview:::', videoCatId);
		return <div></div>;
	}
}
