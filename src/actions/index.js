const url = 'https://test.justjoin.it/offers'

const jobsFetched = jobs => ({
  type: 'JOBS_FETCHED',
  jobs
})

export const fetchJobs = () => dispatch => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch(jobsFetched(data))
      dispatch(unwrapCategories(data))
      dispatch(switchCategory(data, 'all'))
    })
    .catch(error => console.log(error))
}

const unwrapCategories = jobs => ({
  type: 'UNWRAP_CATEGORIES',
  jobs
})

export const checkedCategory = category => ({
  type: 'CHECKED_CATEGORY',
  category
})

const updateMapDataWithCategory = (jobs, checkedCategory) => ({
  type: 'UPDATE_MAP_DATA_WITH_CATEGORY',
  jobs,
  checkedCategory
})

export const updateMapDataWithJob = job => ({
  type: 'UPDATE_MAP_DATA_WITH_JOB',
  job
})

export const switchCategory = (jobs, category) => dispatch => {
  dispatch(checkedCategory(category))
  dispatch(updateMapDataWithCategory(jobs, category))
}
