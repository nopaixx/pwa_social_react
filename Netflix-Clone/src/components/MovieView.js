
import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';


export default class MovieView extends Component{

		render(){
				let videoId_in_url = this.props.match.params.videId
				videoId_in_url	= '1Tv2YhtosAA' //REMOVE just not all video are in cache{
			
				return (
					<MovieDetails
						movie={this.props.youtube.cache_data[videoId_in_url]}
					/>
			);}
		
}
