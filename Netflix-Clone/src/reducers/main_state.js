const main_state = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_YOUTUBE_INITIAL':
      return {	      
         ...state,
	 youtube: action.youtube
      }
    default:
      return state
  }
}

export default main_state
