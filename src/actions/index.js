import { ActionType, TEST_DATA_URL } from '../consts'

const jobsFetched = jobs => ({
  type: ActionType.JOBS_FETCHED,
  jobs
})

export const fetchJobs = () => dispatch => {
  fetch(TEST_DATA_URL)
    .then(response => response.json())
    .then(data => {
      dispatch(jobsFetched(data))
      dispatch(unwrapCategories(data))
      dispatch(switchCategory(data, 'all'))
    })
    .catch(error => console.log(error))
}

const unwrapCategories = jobs => ({
  type: ActionType.UNWRAP_CATEGORIES,
  jobs
})

export const checkedCategory = category => ({
  type: ActionType.CHECKED_CATEGORY,
  category
})

const updateMapDataWithCategory = (jobs, checkedCategory) => ({
  type: ActionType.UPDATE_MAP_DATA_WITH_CATEGORY,
  jobs,
  checkedCategory
})

export const updateMapDataWithJob = job => ({
  type: ActionType.UPDATE_MAP_DATA_WITH_JOB,
  job
})

export const switchCategory = (jobs, category) => dispatch => {
  dispatch(checkedCategory(category))
  dispatch(updateMapDataWithCategory(jobs, category))
}
