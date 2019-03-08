import React, { Component } from 'react'
import JobHead from './JobHead'
import JobRequirements from './JobRequirements'
import JobDescription from './JobDescription'

class Job extends Component {
  render() {
    const job = this.props.jobs.find(
      job => job['id='] === this.props.routeParamId
    )

    return (
      <div id='job'>
        <JobHead job={job} />
        <JobRequirements job={job} />
        <JobDescription job={job} />
      </div>
    )
  }
}

export default Job
