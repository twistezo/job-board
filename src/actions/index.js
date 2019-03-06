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

export const updateMapData = (jobs, checkedCategory) => ({
  type: 'MAP_DATA',
  jobs,
  checkedCategory
})

export const switchCategory = (jobs, category) => dispatch => {
  dispatch(checkedCategory(category))
  dispatch(updateMapData(jobs, category))
}
