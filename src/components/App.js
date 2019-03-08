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
import { PUBLIC_URL } from '../index'

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
          <div id='map' className='mb-4'>
            <MapContainer />
          </div>
          <div id='board' className='row justify-content-md-center pb-5'>
            <div className='col-sm-10'>
              <Switch>
                <Route
                  exact
                  path={PUBLIC_URL + '/'}
                  component={() => (
                    <Redirect
                      to={{
                        pathname: PUBLIC_URL + '/jobs/category-all'
                      }}
                    />
                  )}
                />
                <Route
                  path={PUBLIC_URL + '/jobs/category-:category'}
                  component={route => (
                    <BoardContainer
                      routeParamCategory={route.match.params.category}
                    />
                  )}
                />
                <Route
                  path={PUBLIC_URL + '/job/id-:id'}
                  component={route => (
                    <JobContainer routeParamId={route.match.params.id} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
