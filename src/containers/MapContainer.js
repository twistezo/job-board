import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = state => ({
  jobs: state.jobs,
  checkedCategory: state.filters.checkedCategory,
  mapData: state.filters.mapData
})

export const MapContainer = connect(mapStateToProps)(Map)
