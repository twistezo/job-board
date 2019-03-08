import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../index'

class FiltersBar extends Component {
  componentDidUpdate(prevProps) {
    const checkedCategory = this.props.checkedCategory
    if (prevProps.checkedCategory !== checkedCategory) {
      this.handleCategoryActive(this.props.checkedCategory)
    }
  }

  handleCategoryActive = checkedCategory => {
    let categoriesEl = document.querySelector('#filters-bar')
    // unactive all categories
    categoriesEl
      .querySelectorAll('span')
      .forEach(el => el.classList.remove('active'))
    // active checked category
    let activeCategory = [...categoriesEl.querySelectorAll('span')].find(
      el => el.innerText === checkedCategory
    )
    if (activeCategory !== undefined) activeCategory.classList.add('active')
  }

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
        <span className={i === 0 ? 'active' : ''}>{category + ' '}</span>
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
