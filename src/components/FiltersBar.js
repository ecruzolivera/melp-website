import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsPerPage: {
    width: '4rem',
  },
  listItem__primary: {
    marginRight: theme.spacing.unit,
  },
})

class FiltersBar extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 0,
    itemsToShow: 10,
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null })
    const { onSortChange, options } = this.props
    onSortChange(options[index])
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { itemsPerPage, onItemsPerPageChange, options, classes } = this.props
    const { anchorEl } = this.state

    return (
      <Paper className={classes.root} elevation={1}>
        <List component='nav'>
          <ListItem
            button
            aria-haspopup='true'
            aria-controls='lock-menu'
            aria-label='When device is locked'
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary='Sort by:'
              secondary={options[this.state.selectedIndex]}
              className={classes.listItem}
              classes={{ primary: classes.listItem__primary }}
            />
          </ListItem>
        </List>
        <Menu
          id='lock-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <TextField
          id='standard-number'
          label='Show:'
          value={itemsPerPage}
          onChange={e => onItemsPerPageChange(e.target.value)}
          type='number'
          className={classes.itemsPerPage}
          InputLabelProps={{
            shrink: true,
          }}
          margin='dense'
        />
      </Paper>
    )
  }
}

FiltersBar.propTypes = {
  sortOptions: PropTypes.arrayOf(PropTypes.string),
  onSortChange: PropTypes.func.isRequired,
  onItemsPerPageChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FiltersBar)
