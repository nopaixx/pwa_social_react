import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';


export default class MovieGenre extends Component{
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

				/*<Modal
					show={this.state.toggleModal}
					movie={this.props.movie}
					modalClosed={this.closeModal}
				>
					<MovieDetails
						movie={this.props.movie}
					/>
				</Modal>*/
