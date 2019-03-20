import { combineReducers } from 'redux'
import { ActionType } from '../consts'
import {
  repairFetchedJobs,
  unwrapCategoriesFromJobs,
  updateMapDataWithCategory,
  jobObjectToMapData
} from './reducersUtils'

const jobsShape = []

const jobs = (state = jobsShape, action) => {
  switch (action.type) {
    case ActionType.JOBS_FETCHED:
      return repairFetchedJobs(action.jobs)
    default:
      return state
  }
}

const filtersShape = {
  data: [],
  checkedCategory: '',
  mapData: []
}

const filters = (state = filtersShape, action) => {
  switch (action.type) {
    case ActionType.UNWRAP_CATEGORIES:
      return {
        ...state,
        data: unwrapCategoriesFromJobs(action.jobs)
      }
    case ActionType.CHECKED_CATEGORY:
      return {
        ...state,
        checkedCategory: action.category
      }
    case ActionType.UPDATE_MAP_DATA_WITH_CATEGORY:
      return {
        ...state,
        mapData: updateMapDataWithCategory(action.jobs, action.checkedCategory)
      }
    case ActionType.UPDATE_MAP_DATA_WITH_JOB:
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
