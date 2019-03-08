import { connect } from 'react-redux'
import Board from '../components/Board'
import { checkedCategory, updateMapDataWithJob } from '../actions/index'

const mapStateToProps = state => ({
  jobs: state.jobs
})

const mapDispatchToProps = { checkedCategory, updateMapDataWithJob }

export const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
