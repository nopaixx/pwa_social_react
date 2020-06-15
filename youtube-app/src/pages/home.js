import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { getReproductionLists } from "../api/reproductionList";
import ReproductionList from "../components/ReproductionList";

class home extends Component {
	state = {
		reproductionLists: undefined
	};
	componentDidMount() {
		const channelName = this.props.channelName;
		const reproductionLists = getReproductionLists(channelName);
		this.setState({
			reproductionLists: reproductionLists
		});
	}
	render() {
		const recentReproductionLists = this.state.reproductionLists ? (
			this.state.reproductionLists.map(reproductionList => {
				console.log("AL-", reproductionList);
				return (
					<ReproductionList
						reproductionList={
							reproductionList
						}
					/>
				);
			})
		) : (
			<p>Loading...</p>
		);
		return (
			<Grid container spacing={16}>
				<Grid item sm={8} xs={12}>
					<p>Content...</p>
					{recentReproductionLists}
				</Grid>
				<Grid item sm={4} xs={12}>
					<p>Profile...</p>
				</Grid>
			</Grid>
		);
	}
}

export default home;
