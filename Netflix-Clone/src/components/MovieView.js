import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../components/UI/Modal';
import Navbar from './Navbar';
import MovieDetails from '../components/Movie/MovieDetails';

export default class MovieView extends Component {
	render() {
		let videoId_in_url = this.props.match.params.videoId;
		videoId_in_url = '1Tv2YhtosAA'; //REMOVE just not all video are in cache{
		return (
			<div>
				<Navbar
					showMovies={this.onSearchHandler}
					youtube={this.props.youtube}
				/>

				<MovieDetails
					movie={this.props.youtube.cache_data[videoId_in_url]}
				/>
			</div>
		);
	}
}
