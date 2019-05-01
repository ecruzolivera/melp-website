import React from "react"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  card: {
    maxWidth: "600px",
    display:'flex',
    alignItems:'center'

  },
  cardMedia:{
    width: '200px',
    height:'200px',
    borderRadius:'4px'
  }
})

const PlaceCard = ({ name, contact, address, rating, classes }) => (
  <Card raised className={classes.card}>
    <CardMedia className={classes.cardMedia}
      component='img'
      image='http://lorempixel.com/200/200/food/'
      title={`${name}`}
    />
    <div>
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='caption'>{`rating: ${rating}/4`}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant='body1' align='right'>
          {address.street}
        </Typography>
        <Typography variant='body1' align='right'>
          {address.city}
        </Typography>
        <Typography variant='body1' align='right'>
          {address.state}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant='body1'>{`Tel: ${contact.phone}`}</Typography>
        <Typography variant='body1'>{`email: ${contact.email}`}</Typography>
        <Typography variant='body1'>{contact.site}</Typography>
      </CardContent>
    </div>
  </Card>
)

PlaceCard.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PlaceCard)
