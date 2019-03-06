import React, { Component } from 'react'

class Job extends Component {
  Job = item => {
    const job = item.job
    const skills = [
      ...job.skills.map(skill => (
        <p key={skill.name}>
          <span>{skill.name + ' - '}</span>
          <span>{skill.level}</span>
        </p>
      ))
    ]

    return (
      <div>
        {job.title !== undefined && <p>{job.title}</p>}
        {job.city !== undefined && <p>{job.city}</p>}
        <p>{job.salary_from}</p>
        <p>{job.salary_to}</p>
        <p>{job.salary_currency}</p>
        <p>{job.company_logo_url}</p>
        <p>{job.company_name}</p>
        <p>{job.company_url}</p>
        <p>{job.employment_type}</p>
        <p>{job.experience_level}</p>
        <p>{job.latitude}</p>
        <p>{job.longtitude}</p>
        <p>{job.marker_icon}</p>
        <p>{job.published_at}</p>
        <p>{job.remote}</p>
        <p>{job.street}</p>
        <div>{skills}</div>
      </div>
    )
  }

  render() {
    const currentJobId = this.props.routeParamId
    const job = this.props.jobs.find(job => job['id='] === currentJobId)
    return (
      <div>
        {job !== undefined ? <this.Job job={job} /> : 'Broken job post..'}
      </div>
    )
  }
}

export default Job
