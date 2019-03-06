import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = state => ({
  jobs: state.jobs
})

export const BoardContainer = connect(mapStateToProps)(Board)
