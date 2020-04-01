import React, { Component } from 'react'

class JobRequirements extends Component {
  render() {
    const job = this.props.job

    return (
      <div className='job-card row'>
        <div className='col-sm-12'>
          <div className='job-lvl row d-flex justify-content-center'>
            <h4>
              <span id='j' className={job.experience_level === 'junior' ? 'exhibited' : 'muted'}>
                junior
              </span>
              <span className='muted'>&nbsp;|&nbsp;</span>
              <span id='m' className={job.experience_level === 'mid' ? 'exhibited' : 'muted'}>
                mid
              </span>
              <span className='muted'>&nbsp;|&nbsp;</span>
              <span id='s' className={job.experience_level === 'senior' ? 'exhibited' : 'muted'}>
                senior
              </span>
              <hr />
            </h4>
          </div>
          <div className='row job-skills d-flex justify-content-center'>
            <div className='col-auto'>
              <div className='row'>{
                job.skills.map(skill => (
                  <div className='ml-4 mr-4' key={skill.name}>
                    <div className='pb-2'>{skill.name}</div>
                    <div className='row d-flex justify-content-center'>
                      {
                        [0, 1, 2, 3, 4].map(level => (
                          <i className={skill.level > level ? 'fas fa-circle' : 'far fa-circle'} />
                        ))
                      }
                    </div>
                  </div>
                ))
              }</div>
            </div>
          </div>
          <div className='row job-skills pt-2 d-flex justify-content-center'>
            <h5>
              <hr />
              remote?&nbsp;&nbsp;<i className={job.remote ? 'fas fa-check' : 'fas fa-times'} />
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default JobRequirements
