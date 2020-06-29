import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ChannelList from './ChannelList';
import PinnedList from './PinnedList';

import { withRouter } from 'react-router';

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
				<Header movie={this.props.youtube.header} />
				<div className="movieShowcase">
					<PinnedList
						title={titlePremium}
						movies={
							this.props.youtube
								.premium_content
						}
						id={'premium_content'}
					/>
					<PinnedList
						title={titleRecent}
						movies={
							this.props.youtube
								.latest_videos
						}
						id={'recent_videos'}
					/>

					{this.props.youtube.playlist_list.items.map(
						element => {
							return (
								<ChannelList
									play_list={
										element
									}
									id={
										element.id
									}
								/>
							);
						}
					)}
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(MainContent);
