export const repairFetchedJobs = jobs => {
  jobs.forEach(job => {
    // Fetched IDs has special characters in their seeds.
    // Ex. `\` which is not allowed in routing.
    job['id='] = job['id='].slice(-36)
  })
  return jobs
}

export const unwrapCategoriesFromJobs = jobs => {
  let categories = ['all']
  jobs.forEach(job => {
    categories.push(job.marker_icon)
  })
  let uniqueCategories = [...new Set(categories)]
  uniqueCategories.sort()
  // move 'other' to end
  uniqueCategories.push(
    uniqueCategories.splice(uniqueCategories.indexOf('other'), 1)[0]
  )
  return uniqueCategories
}

export const createMapDataWithCategory = (jobs, checkedCategory) =>
  jobs
    .filter(job => {
      const jobCategory = job.marker_icon
      return (
        jobCategory ===
        (checkedCategory === 'all' ? jobCategory : checkedCategory)
      )
    })
    .map(job => jobObjectToMapData(job))

export const jobObjectToMapData = job => ({
  jobId: job['id='],
  title: job.title,
  companyName: job.company_name,
  lat: job.latitude,
  lon: job.longitude
})
