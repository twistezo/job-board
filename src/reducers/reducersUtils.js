export const repairFetchedJobs = jobs => {
  jobs.forEach(job => {
    // Fetched IDs has special characters in their seeds.
    // Ex. `\` which is not allowed in routing.
    job.id = job.id.slice(-36)
  })
  return jobs
}

export const retrieveCategories = jobs => {
  const categories = ['all', ...new Set(jobs.map(job => job.marker_icon))].sort()
  // move 'other' to end
  categories.push(
    categories.splice(categories.indexOf('other'), 1)[0]
  )
  return categories
}

export const updateMapDataWithCategory = (jobs, checkedCategory) =>
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
  jobId: job.id,
  title: job.title,
  companyName: job.company_name,
  lat: job.latitude,
  lon: job.longitude
})
