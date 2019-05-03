import React from 'react'
import PropTypes from 'prop-types'
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

const MapBox = ({ markers}) => {
  const center = (markers[0] && [markers[0].lat, markers[0].lng]) || [0, 0]
  return (
    <Map center={center} zoom={15}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map(marker => (
        <Marker key={marker.id} position={[marker.lat, marker.lng]} />
      ))}
    </Map>
  )
}

MapBox.propTypes = {
  center: PropTypes.array.isRequired,
  markers: PropTypes.arrayOf(PropTypes.array),
  zoom: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MapBox)
