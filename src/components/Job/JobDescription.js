import React, { Component } from 'react'

class JobDescription extends Component {
  render() {
    const job = this.props.job

    return (
      <div className='job-card row text-justify'>
        <div className='col'>
          <div className='row'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec ante lectus. Maecenas sed tempor lorem. Vestibulum iaculis
              justo sed enim vehicula, efficitur auctor felis consequat. Sed
              ornare blandit felis nec ultricies. Donec id tortor a mi malesuada
              placerat. Nam vel metus mi. In vitae malesuada est. Nullam nec
              congue mi, et maximus tellus. Vivamus vel gravida mi, nec
              consequat dui. Sed nec lorem dapibus, sodales nibh in, rutrum
              nunc.
            </p>
            <p>
              Ut a sapien ut libero dictum sodales. Cras porttitor dolor maximus
              justo aliquam, efficitur porttitor risus tincidunt. Morbi
              sagittis, libero id luctus maximus, nisi massa hendrerit dolor,
              vitae auctor erat augue ut felis. Ut egestas vehicula dictum. Ut
              tempus mauris et sagittis consectetur. Morbi a vehicula massa. Nam
              rhoncus pharetra libero at fringilla. Nullam a sollicitudin urna.
              Duis sed leo erat. Curabitur lobortis metus metus, eget egestas
              lacus auctor ac. Quisque facilisis odio et est tristique
              convallis. Aenean dapibus turpis eros, id condimentum eros varius
              eu. Nullam id purus ut sapien ornare ultricies ut non urna. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Cras facilisis augue quam, suscipit tincidunt
              velit malesuada vel.
            </p>
          </div>
          <div className='row d-flex justify-content-end'>
            {new Date(job.published_at).toLocaleString('pl-PL', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default JobDescription
