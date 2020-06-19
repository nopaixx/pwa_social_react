import { connect } from 'react-redux'
import Layout from '../components/Layout'

const mapStateToProps = state => ({
  youtube: state.main_state.youtube
})

export default connect(mapStateToProps)(Layout)
