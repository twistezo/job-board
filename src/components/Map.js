import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import L from 'leaflet'
import { PUBLIC_URL } from '../consts'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: {
        should: false,
        path: ''
      }
    }
    this.map = null
    this.markerGroup = L.featureGroup()
  }

  componentDidMount() {
    this.initMap()
  }

  componentDidUpdate(prevProps) {
    const mapData = this.props.mapData
    if (prevProps.mapData !== mapData) {
      this.updateMap(mapData)
      this.map.invalidateSize(false)
    }
  }

  initMap = () => {
    this.map = L.map('map', {
      maxZoom: 12
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
  }

  updateMap = coordsData => {
    const map = this.map
    let group = this.markerGroup
    group.clearLayers()
    coordsData.forEach(data => {
      let marker = L.marker([data.lat, data.lon])
      marker.bindPopup(
        L.popup().setContent(
          `<p class='pb-0 mb-0'>${data.title}</p>
          <p>- ${data.companyName}</p>`
        )
      )
      marker.on('click', () => {
        this.setState({
          ...this.state,
          redirect: {
            should: true,
            path: PUBLIC_URL + '/job/id-' + data.jobId
          }
        })
      })
      group.addLayer(marker)
      group.addTo(map)
    })
    map.fitBounds(group.getBounds(), { padding: [0, 30] })
  }

  render() {
    if (this.state.redirect.should) {
      return <Redirect to={this.state.redirect.path} />
    }
    const map = this.map
    if (map === null) return 'Loading map...'
    return ''
  }
}

export default Map
