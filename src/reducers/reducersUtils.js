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

export const updateMapData = (jobs, checkedCategory) =>
  jobs
    .filter(job => {
      const jobCategory = job.marker_icon
      return (
        jobCategory ===
        (checkedCategory === 'all' ? jobCategory : checkedCategory)
      )
    })
    .map(job => ({
      jobId: job['id='],
      title: job.title,
      companyName: job.company_name,
      lat: job.latitude,
      lon: job.longitude
    }))
