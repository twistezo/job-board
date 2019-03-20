import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../consts'

class FiltersBar extends Component {
  handleCategoryClick = category => {
    this.props.switchCategory(this.props.jobs, category)
  }

  Categories = () => {
    return this.props.categories.map((category, i) => (
      <Link
        to={PUBLIC_URL + '/jobs/category-' + category}
        key={category}
        className='navbar-brand'
        onClick={() => this.handleCategoryClick(category)}
      >
        <span
          className={category === this.props.checkedCategory ? 'active' : ''}
        >
          {category + ' '}
        </span>
      </Link>
    ))
  }

  render() {
    return (
      <div id='filters-bar' className='text-center pt-5'>
        <div className='row justify-content-md-center'>
          <div className='col-sm-8'>
            <this.Categories />
            <hr className='pb-1' />
          </div>
        </div>
      </div>
    )
  }
}

export default FiltersBar
