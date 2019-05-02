import React, { Component, Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import TopAppBar from './components/TopAppBar'
import PlaceCard from './components/PlaceCard'
import BottomNav from './components/BottomNav'
import { withStyles } from '@material-ui/core/styles'
import DataFetcher from './services/DataFetcher'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  },
  placeList: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
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
      data = await DataFetcher(1)
    } catch (error) {
      console.error(error)
    }
    this.setState({ data: data })
  }
  render() {
    const { classes } = this.props
    const { data } = this.state
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
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
          <BottomNav
            currentValue={1}
            maxValue={5}
            onChange={(event, value) => console.log(value)}
          />
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
