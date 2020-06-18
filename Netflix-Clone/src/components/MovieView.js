
import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';


export default class MovieView extends Component{
		state={}
		constructor(props){
			 super(props)
		}

	        componentDidMount = () => {
			// VERY IMPORTANT WE SHOULD AVOID TO DO THIS 
			// TE ACOMPLY WITH PWA BEST PRACTICE WE NEED
			// in container/MainComponent we done after
			// that we save this in globalstate and us this
			// insted to call in this component
        	        this.getYoutubeMovies();
	        };

        	getYoutubeMovies = () => {
	                //const url = 'http://127.0.0.1:5000/channel/domain/cdciencia';
        	        const url = 'http://95.217.165.113:5000/channel/domain/cdciencia';
                	axios.get(url)
                        	.then(res => {
                                	const youtube_data = res.data;
	                                this.setState({
        	                                youtube: youtube_data.youtube
                	                });
                        	})
	                        .catch(error => {
        	                        console.log('Error getting playlist', err);
                	        });
	        };

		render(){
				if (!this.state.youtube){
					return ''		
				}

				let videoId_in_url = this.props.match.params.videId
				videoId_in_url	= '1Tv2YhtosAA' //REMOVE just not all video are in cache{
			
				console.log("AL--video pased", this.state.youtube.cache_data[videoId_in_url])
				return (
					<MovieDetails
						movie={this.state.youtube.cache_data[videoId_in_url]}
					/>
			);}
		
}
