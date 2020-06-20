import { connect } from 'react-redux'
import MovieView from '../components/MovieView'

const mapStateToProps = state => ({
  youtube: state.main_state.youtube
})

export default connect(mapStateToProps)(MovieView)
