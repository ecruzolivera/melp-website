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

const MapBox = ({ markers }) => {
  //calculating centroid
  let center = markers.reduce(
    (acc, current) => ({
      lat: acc.lat + current.lat,
      lng: acc.lng + current.lng,
    }),
    { id: '', lat: 0, lng: 0 },
  )
  center = [center.lat / markers.length, center.lng / markers.length]
  return (
    <Map center={center} zoom={15}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map(marker => (
        <Marker key={marker.id} position={[marker.lat, marker.lng]}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </Map>
  )
}

MapBox.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.array),
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MapBox)
