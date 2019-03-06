import { connect } from 'react-redux'
import FiltersBar from '../components/FiltersBar'
import { switchCategory } from '../actions/index'

const mapStateToProps = state => ({
  jobs: state.jobs,
  categories: state.filters.data,
  checkedCategory: state.filters.checkedCategory
})

const mapDispatchToProps = { switchCategory }

export const FiltersBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersBar)
