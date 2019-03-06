import { combineReducers } from 'redux'
import { unwrapCategoriesFromJobs, updateMapData } from './reducersUtils'

const jobsShape = []

const jobs = (state = jobsShape, action) => {
  switch (action.type) {
    case 'JOBS_FETCHED':
      return action.jobs
    default:
      return state
  }
}

const filtersShape = {
  data: [],
  checkedCategory: 'all',
  mapData: []
}

const filters = (state = filtersShape, action) => {
  switch (action.type) {
    case 'UNWRAP_CATEGORIES':
      return {
        ...state,
        data: unwrapCategoriesFromJobs(action.jobs)
      }
    case 'CHECKED_CATEGORY':
      return {
        ...state,
        checkedCategory: action.category
      }
    case 'MAP_DATA':
      return {
        ...state,
        mapData: updateMapData(action.jobs, action.checkedCategory)
      }
    default:
      return state
  }
}

export default combineReducers({
  jobs,
  filters
})
