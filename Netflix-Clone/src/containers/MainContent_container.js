
import { connect } from 'react-redux'
import MainContent from '../components/MainContent'

const mapStateToProps = state => ({
  youtube: state.main_state.youtube
})

export default connect(mapStateToProps)(MainContent)
