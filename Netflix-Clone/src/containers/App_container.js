import { connect } from 'react-redux'
import { get_youtube_initial } from '../actions/main_actions'
import App from '../components/App'


const mapStateToProps = (state) => ({
  youtube: state.main_state.youtube
})

const mapDispatchToProps = dispatch => ({
  get_youtube: () => dispatch(get_youtube_initial())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
