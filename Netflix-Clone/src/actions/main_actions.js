import axios from '../axios-movies';

export const get_youtube_initial = () => dispatch => {
	let host = window.location.host;
	let protocol = window.location.protocol;
	let parts = host.split('.');
	let subdomain = '';
	let backend = '';
	let port;
	let j;
	//https we are running online
	//http test env
	if (protocol === 'https:') {
		// we can do this better with webpack and envars
		subdomain = parts[0];
		backend = 'backendyoutubeapp.nextcoder.es';
		port = 443;
	} else {
		// test enviroment
		backend = '192.168.1.59';
		subdomain = 'testyoutubeapp';
		port = 5000;
	}
	const url = `${protocol}/\/${backend}:${port}/channel/domain/${subdomain}`;
	fetch(url)
		.then(res => res.json())
		.then(result => {
			dispatch({
				type: 'UPDATE_YOUTUBE_INITIAL',
				youtube: result.youtube
			});
		})
		.catch(err => console.log('ER-Fetch initial data'));
};
