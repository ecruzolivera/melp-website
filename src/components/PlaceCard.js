import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import ExitToApp from '@material-ui/icons/ExitToApp'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Rating from 'material-ui-rating'
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
} from 'react-share'

const styles = theme => ({
  card: {
    width: '500px',
    display: 'flex',
    alignItems: 'center',
  },
  cardMedia: {
    width: '200px',
    height: '200px',
    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing.unit,
  },
  cardContent: {
    flexGrow: 1,
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  facebookButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    borderRadius:theme.shape.borderRadius,
    paddingRight: theme.spacing.unit,
    color: '#fff',
    '&:hover': {
      opacity: 0.8,
      cursor:'pointer'
    },
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
})

const PlaceCard = ({ name, contact, address, rating, img, classes }) => (
  <Card raised className={classes.card}>
    <CardMedia
      className={classes.cardMedia}
      component='img'
      image={img}
      title={`${name}`}
    />
    <CardContent className={classes.cardContent}>
      <Typography variant='h5'>{name}</Typography>
      <div className={classes.social}>
        <Rating
          value={rating}
          max={4}
          readOnly={true}
          iconFilled={<StarIcon />}
          iconNormal={<StarBorderIcon />}
        />
        <FacebookShareButton
          url={contact.site.toLowerCase()}
          className={classes.facebookButton}
        >
          <FacebookIcon size={24} round />
          <FacebookShareCount url={contact.site.toLowerCase()}>
            {shareCount => (
              <Typography variant='body1' color='inherit'>{`Share ${shareCount}`}</Typography>
            )}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>

      <div className={classes.address}>
        <Typography variant='body1' align='right'>
          {address.street}
        </Typography>
        <Typography variant='body1' align='right'>
          {address.city}
        </Typography>
        <Typography variant='body1' align='right'>
          {address.state}
        </Typography>
      </div>
      <div className={classes.contact}>
        <PhoneIcon className={classes.icon} />
        <Link href={`tel:${contact.phone}`} variant='body1' color='textPrimary'>
          {contact.phone}
        </Link>
      </div>
      <div className={classes.contact}>
        <EmailIcon className={classes.icon} />
        <Link
          href={`mailto:${contact.email.toLowerCase()}`}
          target='_blank'
          rel='noreferrer'
          variant='body1'
          color='textPrimary'
        >
          {contact.email.toLowerCase()}
        </Link>
      </div>
      <div className={classes.contact}>
        <ExitToApp className={classes.icon} />
        <Link
          href={contact.site.toLowerCase()}
          target='_blank'
          rel='noreferrer'
          variant='body1'
          color='textPrimary'
        >
          {contact.site}
        </Link>
      </div>
    </CardContent>
  </Card>
)

PlaceCard.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PlaceCard)
