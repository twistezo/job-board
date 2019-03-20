import { connect } from 'react-redux'
import { fetchJobs } from '../actions/index'
import Job from '../components/Job/Job'

const mapStateToProps = state => ({
  jobs: state.jobs
})

const mapDispatchToProps = { fetchJobs }

export const JobContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Job)
