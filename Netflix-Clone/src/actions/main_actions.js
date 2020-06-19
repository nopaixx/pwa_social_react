import axios from '../axios-movies';


export const get_youtube_initial = ()  => dispatch => {
	const url = 'http://95.217.165.113:5000/channel/domain/cdciencia';
 	const response = axios.get(url).then(res=>{
        	        console.log("AL-2", res.data.youtube)
	                dispatch({
                	        type: 'UPDATE_YOUTUBE_INITIAL',
                        	youtube: res.data.youtube
        	        })

	        })

	return response
	
	}
