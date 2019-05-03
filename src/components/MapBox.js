import React, { StrictMode } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const styles = theme => ({
  '@global': {
    '.leaflet-container': {
      minHeight: '400px',
      width: 'auto',
    },
  },
})
const coord = {
  lat: 51.505,
  lng: -0.09,
  zoom: 10,
}
const position = [coord.lat, coord.lng]

const MapBox = ({ center, markers, classes }) => (
  <Map center={position} zoom={coord.zoom}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
  </Map>
)

MapBox.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MapBox)
