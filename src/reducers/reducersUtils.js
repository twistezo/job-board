export const repairFetchedJobs = jobs => {
  jobs.forEach(job => {
    // Fetched IDs has special characters in their seeds.
    // Ex. `\` which is not allowed in routing.
    job.id = job.id.slice(-36)
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


export const updateMapDataWithCategory = (jobs, checkedCategory) =>
  jobs
    .filter(job => ['all', job.marker_icon].includes(checkedCategory))
    .map(job => jobObjectToMapData(job))

export const jobObjectToMapData = job => ({
  jobId: job.id,
  title: job.title,
  companyName: job.company_name,
  lat: job.latitude,
  lon: job.longitude
})
