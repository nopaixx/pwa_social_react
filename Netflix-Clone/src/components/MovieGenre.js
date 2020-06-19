import React, { Component } from 'react';
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';

import { withRouter } from "react-router";

class MovieGenre extends Component{
		constructor(props){
			 super(props)
		}
		render(){
			const url = `/view/${this.props.movie.contentDetails.videoId}`
			return (
				<div
					onClick={()=>{this.props.history.push(url)}}
					className={
						'movieShowcase__container--movie'
					}
				>
					<img
						src={this.props.posterUrl}
						className="movieShowcase__container--movie-image"
					/>
				</div>
			)};
		
}
export default withRouter(MovieGenre);
