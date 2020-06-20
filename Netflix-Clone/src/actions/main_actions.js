import axios from '../axios-movies';


export const get_youtube_initial = ()  => dispatch => {

	let host = window.location.host;
	let protocol = window.location.protocol;
	let parts = host.split(".");
	let subdomain = "";
	let backend = ''
	let port
	//https we are running online
	//http test env
	if (protocol === "https:"){
		// we can do this better with webpack and envars
		subdomain = parts[0];
		backend = 'backendyoutubeapp.nextcoder.es'
		port = 443
	}else{
		// test enviroment
		backend = '95.217.165.113'
		subdomain = 'cdciencia'
		port = 5000
	}
	const url = `${protocol}/\/${backend}:${port}/channel/domain/${subdomain}`
	const response = axios.get(url).then(res=>{
	                dispatch({
                	        type: 'UPDATE_YOUTUBE_INITIAL',
                        	youtube: res.data.youtube
        	        })

	        })

	return response
	
	}
