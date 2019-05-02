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
    currentPage: 1,
    itemsPerPage: 10,
    maxPage: null,
  }

  async componentDidMount() {
    let data = []
    try {
      data = await DataFetcher()
    } catch (error) {
      console.error(error)
    }
    const maxPage = data.length / this.state.itemsPerPage

    this.setState({ data: data, maxPage: maxPage })
  }

  bottomNavHandler = (event, value) => {
    if (value === 'Next' && this.state.currentPage < this.state.maxPage) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1,
      }))
    } else if (value === 'Previous' && this.state.currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1,
      }))
    }
  }

  render() {
    const { classes } = this.props
    const { data, currentPage, itemsPerPage, maxPage } = this.state
    const dataToRender = data.slice(
      (currentPage - 1) * itemsPerPage,
      (currentPage - 1) * itemsPerPage + itemsPerPage,
    )
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <TopAppBar onChange={console.log} />
          <main className={classes.placeList}>
            {dataToRender && dataToRender.length > 0 ? (
              dataToRender.map(item => (
                <div key={item.id} className={classes.placeItem}>
                  <PlaceCard
                    {...item}
                    img={`http://lorempixel.com/200/200/food/${Math.floor(
                      Math.random() * dataToRender.length,
                    ) + 1}`}
                  />
                </div>
              ))
            ) : (
              <CircularProgress className={classes.placeItem} />
            )}
          </main>
          {dataToRender && dataToRender.length > 0 && (
            <BottomNav
              currentValue={currentPage}
              maxValue={maxPage}
              onChange={this.bottomNavHandler}
            />
          )}
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
