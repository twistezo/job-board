import { connect } from 'react-redux'
import { fetchJobs, checkedCategory } from '../actions/index'
import App from '../components/App'

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = { fetchJobs, checkedCategory }

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
