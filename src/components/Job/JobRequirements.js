import React, { Component } from 'react'

class JobRequirements extends Component {
  render() {
    const job = this.props.job
    const skillsIcons = skillLevel => {
      let icons = []
      for (let i = 0; i < 5; i++) {
        icons.push(
          <i
            key={i}
            className={i < skillLevel ? 'fas fa-circle' : 'far fa-circle'}
          />
        )
      }
      return <span>{icons}</span>
    }
    const skills = [
      ...job.skills.map(skill => (
        <div className='ml-4 mr-4' key={skill.name}>
          <div className='row d-flex justify-content-center pb-1 pb-2'>
            {skill.name}
          </div>
          <div className='row d-flex justify-content-center'>
            {skillsIcons(skill.level)}
          </div>
        </div>
      ))
    ]
    const exp = job.experience_level

    return (
      <div className='job-card row'>
        <div className='col-sm-12'>
          <div className='job-lvl row d-flex justify-content-center'>
            <h4>
              <span id='j' className={exp === 'junior' ? 'exhibited' : 'muted'}>
                junior
              </span>
              <span className='muted'>&nbsp;|&nbsp;</span>
              <span id='m' className={exp === 'mid' ? 'exhibited' : 'muted'}>
                mid
              </span>
              <span className='muted'>&nbsp;|&nbsp;</span>
              <span id='s' className={exp === 'senior' ? 'exhibited' : 'muted'}>
                senior
              </span>
              <hr />
            </h4>
          </div>
          <div className='row job-skills d-flex justify-content-center'>
            <div className='col-auto'>
              <div className='row'>{skills}</div>
            </div>
          </div>
          <div className='row job-skills pt-2 d-flex justify-content-center'>
            <h5>
              <hr />
              remote?&nbsp;&nbsp;
              {job.remote ? (
                <i className='fas fa-check' />
              ) : (
                <i className='fas fa-times' />
              )}
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default JobRequirements
