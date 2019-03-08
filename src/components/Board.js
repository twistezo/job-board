import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../index'

class Board extends Component {
  handleUpdateMap = job => {
    this.props.checkedCategory('')
    this.props.updateMapDataWithJob(job)
  }

  JobCard = item => {
    const job = item.job
    const isUndisclosedSalary =
      job.salary_from === null ||
      job.salary_to === null ||
      job.salary_currency === null
    const salary = isUndisclosedSalary
      ? 'Undisclosed salary'
      : job.salary_from +
        ' - ' +
        job.salary_to +
        ' ' +
        job.salary_currency.toUpperCase()
    const skills = [
      ...job.skills.map((skill, i) => {
        const separator = i === 0 ? '' : ' | '
        return <span key={skill.name}>{separator + skill.name}</span>
      })
    ].slice(0, 2)

    return (
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-sm-2 d-flex flex-wrap align-items-center justify-content-center pt-3 pt-sm-0'>
            <img src={job.company_logo_url} alt='' className='job-card-img' />
          </div>
          <div className='col-sm-6'>
            <div className='card-body'>
              <h5 className='card-title'>
                <div className='job-title'>
                  <Link
                    to={PUBLIC_URL + '/job/id-' + job['id=']}
                    onClick={() => this.handleUpdateMap(job)}
                  >
                    <p>{job.title}</p>
                  </Link>
                </div>
              </h5>
              <p className='card-text'>
                <small className='text-muted'>
                  <span>
                    {job.company_name + ' - ' + job.city + ', ' + job.street}
                  </span>
                </small>
              </p>
            </div>
          </div>
          <div className='col-sm-4 text-right'>
            <div className='card-body'>
              <div className='card-text mb-3'>
                <span className='salary'>{salary}</span>
              </div>
              <p className='card-text'>
                <small className='text-muted'>
                  <span>{skills}</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const currentCategory = this.props.routeParamCategory
    const jobs = this.props.jobs
      .filter(
        job =>
          job.marker_icon ===
          (currentCategory === 'all' ? job.marker_icon : currentCategory)
      )
      .map(job => <this.JobCard job={job} key={job['id=']} />)
    return jobs
  }
}

export default Board
