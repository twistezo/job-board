import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { FiltersBarContainer } from '../containers/FiltersBarContainer'
import { BoardContainer } from '../containers/BoardContainer'
import { JobContainer } from '../containers/JobContainer'
import { MapContainer } from '../containers/MapContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.map = null
  }

  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <FiltersBarContainer />
          <div id='map' className='mb-5'>
            <MapContainer />
          </div>
          <Switch>
            <Route
              exact
              path='/'
              component={() => (
                <Redirect
                  to={{
                    pathname: '/jobs/category-all'
                  }}
                />
              )}
            />
            <Route
              path={'/jobs/category-:category'}
              component={route => (
                <BoardContainer
                  routeParamCategory={route.match.params.category}
                />
              )}
            />
            <Route
              path={'/job/id-:id'}
              component={route => (
                <JobContainer routeParamId={route.match.params.id} />
              )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
