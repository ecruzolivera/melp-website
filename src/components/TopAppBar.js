import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const TopAppBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position='sticky'>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant='h6' color='inherit'>
          Melp
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(TopAppBar)
