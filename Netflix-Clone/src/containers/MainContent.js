import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ChannelList from './ChannelList';
import PinnedList from './PinnedList';
//import TopRated from './TopRated';
//import ActionMovies from './ActionMovies';
//import ComedyMovies from './ComedyMovies';
//import Documentaries from './Documentaries';

class MainContent extends Component {
	state = {
		/** Will hold our chosen movie to display on the header */
		selectedMovie: {}
	};

	componentDidMount = () => {
		this.getMovie();
		this.getYoutubeMovies();
	};

	getYoutubeMovies = () => {
		//const url = 'http://127.0.0.1:5000/channel/domain/cdciencia';
		const url = 'http://192.168.1.59:5000/channel/domain/cdciencia';
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
	getMovie = () => {
		/** Movie Id for the Narcos series  */
		const movieId = 63351;
		/** Make Api call to retrieve the details for a single movie  */
		const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.API_KEY}`;
		axios.get(url)
			.then(res => {
				const movieData = res.data;
				this.setState({ selectedMovie: movieData });
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		console.log(this.state);
		const titleRecent = 'RECENT VIDEOS';
		const titlePremium = 'PREMIUM CONTENT';
		return (
			<div className="container">
				<Header
					movie={
						this.state.youtube &&
						this.state.youtube.header
							? this.state.youtube
									.header
							: undefined
					}
				/>
				<div className="movieShowcase">
					<PinnedList
						title={titlePremium}
						movies={
							this.state.youtube &&
							this.state.youtube
								.premium_content
								? this.state
										.youtube
										.premium_content
								: undefined
						}
					/>
					<PinnedList
						title={titleRecent}
						movies={
							this.state.youtube &&
							this.state.youtube
								.latest_videos
								? this.state
										.youtube
										.latest_videos
								: undefined
						}
					/>

					{this.state.youtube &&
					this.state.youtube.playlist_list
						? this.state.youtube.playlist_list.items.map(
								element => {
									return (
										<ChannelList
											play_list={
												element
											}
										/>
									);
								}
						  )
						: ''}
				</div>
				<Footer />
			</div>
		);
	}
}

export default MainContent;
/*<TopRated />
          <ActionMovies />
          <ComedyMovies />
          <Documentaries />*/
/*this.state.youtube &&
						this.state.youtube.header
							? this.state.youtube
									.header
							: undefined*/
