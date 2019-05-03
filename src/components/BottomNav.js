import React from 'react'
import PropTypes from 'prop-types'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const BottomNav = ({ currentValue, maxValue, onChange, classes }) => (
  <BottomNavigation onChange={onChange} className={classes.root}>
    <BottomNavigationAction
      label='Previous'
      value='Previous'
      icon={<KeyboardArrowLeft />}
    />
    <Typography variant='body1'>{`${currentValue} - ${maxValue}`}</Typography>
    <BottomNavigationAction
      label='Next'
      value='Next'
      icon={<KeyboardArrowRight />}
    />
  </BottomNavigation>
)

BottomNav.propTypes = {
  currentValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BottomNav)
