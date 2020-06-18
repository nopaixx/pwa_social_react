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

	render() {
		const titleRecent = 'RECENT VIDEOS';
		const titlePremium = 'PREMIUM CONTENT';
		return (
			<div className="container">
				<Header
					movie={
						this.props.youtube &&
						this.props.youtube.header
							? this.props.youtube
									.header
							: undefined
					}
				/>
				<div className="movieShowcase">
					<PinnedList
						history={this.props.history}
						title={titlePremium}
						movies={
							this.props.youtube &&
							this.props.youtube
								.premium_content
								? this.props
										.youtube
										.premium_content
								: undefined
						}
					/>
					<PinnedList
						history={this.props.history}
						title={titleRecent}
						movies={
							this.props.youtube &&
							this.props.youtube
								.latest_videos
								? this.props
										.youtube
										.latest_videos
								: undefined
						}
					/>

					{this.props.youtube &&
					this.props.youtube.playlist_list
						? this.props.youtube.playlist_list.items.map(
								element => {
									return (
										<ChannelList
											history={this.props.history}
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
