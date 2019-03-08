import { combineReducers } from 'redux'
import {
  repairFetchedJobs,
  unwrapCategoriesFromJobs,
  createMapDataWithCategory,
  jobObjectToMapData
} from './reducersUtils'

const jobsShape = []

const jobs = (state = jobsShape, action) => {
  switch (action.type) {
    case 'JOBS_FETCHED':
      return repairFetchedJobs(action.jobs)
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
    case 'UPDATE_MAP_DATA_WITH_CATEGORY':
      return {
        ...state,
        mapData: createMapDataWithCategory(action.jobs, action.checkedCategory)
      }
    case 'UPDATE_MAP_DATA_WITH_JOB':
      return {
        ...state,
        mapData: [jobObjectToMapData(action.job)]
      }
    default:
      return state
  }
}

export default combineReducers({
  jobs,
  filters
})
