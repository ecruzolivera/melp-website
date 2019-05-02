import React, { Component, Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import TopAppBar from './components/TopAppBar'
import PlaceCard from './components/PlaceCard'
import { withStyles } from '@material-ui/core/styles'
import DataFetcher from './services/DataFetcher'

const styles = theme => ({
  placeList: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  placeItem: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

class App extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    let data = []
    try {
      data = await DataFetcher(2)
    } catch (error) {
      console.error(error)
    }
    this.setState({ data: data })
    console.log(data)
  }
  render() {
    const { classes } = this.props
    const { data } = this.state
    return (
      <Fragment>
        <CssBaseline />
        <TopAppBar onChange={console.log} />
        <div className={classes.placeList}>
          {data && data.length > 0 ? (
            data.map(item => (
              <div key={item.id} className={classes.placeItem}>
                <PlaceCard
                  {...item}
                  img={`http://lorempixel.com/200/200/food/${Math.floor(
                    Math.random() * data.length,
                  ) + 1}`}
                />
              </div>
            ))
          ) : (
            <CircularProgress className={classes.placeItem} />
          )}
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
