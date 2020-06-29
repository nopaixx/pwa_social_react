import { connect } from 'react-redux'
import MovieListView from '../components/MovieListView'

const mapStateToProps = state => ({
  youtube: state.main_state.youtube
})

export default connect(mapStateToProps)(MovieListView)

