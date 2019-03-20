import React, { Component } from 'react'
import JobHead from './JobHead'
import JobRequirements from './JobRequirements'
import JobDescription from './JobDescription'

class Job extends Component {
  Job = () => {
    const job = this.props.jobs.find(job => job.id === this.props.routeParamId)
    return (
      <div id='job'>
        <JobHead job={job} />
        <JobRequirements job={job} />
        <JobDescription job={job} />
      </div>
    )
  }

  render() {
    return this.props.jobs.length > 0 ? <this.Job /> : ''
  }
}

export default Job
