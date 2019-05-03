import React, { Component, Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import TopAppBar from './components/TopAppBar'
import PlaceCard from './components/PlaceCard'
import BottomNav from './components/BottomNav'
import FiltersBar from './components/FiltersBar'
import Seo from './components/Seo'
import MapBox from './components/MapBox'

import DataFetcher from './services/DataFetcher'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  },
  main: {
    display: 'flex',
  },
  leftPanel: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  rightPanel: {
    minHeight: '400px',
    width: '400px',
    margin: '0 auto',
    flexGrow: 1,
  },
  map: {
    position: 'sticky',
    top: '0px',
  },
  filtersBar: {},
  placeList: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  placeItem: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

const SortingOptions = ['Alphabetically', 'Rating']

class App extends Component {
  state = {
    data: [],
    currentPage: 1,
    itemsPerPage: 10,
    maxPage: null,
    sortedBy: SortingOptions[0],
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

  filtersBarHandler = value => {
    this.setState({
      sortedBy: value,
    })
  }

  render() {
    const { classes } = this.props
    const { data, currentPage, itemsPerPage, maxPage, sortedBy } = this.state
    if (sortedBy === SortingOptions[0]) {
      data.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      data.sort((a, b) => a.rating < b.rating)
    }

    const dataToRender = data.slice(
      (currentPage - 1) * itemsPerPage,
      (currentPage - 1) * itemsPerPage + itemsPerPage,
    )

    const markers = dataToRender.map(item => ({
      id: item.id,
      ...item.address.location,
    }))

    return (
      <Fragment>
        <CssBaseline />
        <Seo />
        <div className={classes.root}>
          <TopAppBar onChange={console.log} />
          <main className={classes.main}>
            <div className={classes.leftPanel}>
              <FiltersBar
                onChange={this.filtersBarHandler}
                options={SortingOptions}
              />
              <div className={classes.placeList}>
                {dataToRender && dataToRender.length > 0 ? (
                  dataToRender.map(item => (
                    <div key={item.id} className={classes.placeItem}>
                      <PlaceCard
                        {...item}
                        img={`http://lorempixel.com/200/200/food/
                        ${Math.floor(Math.random() * dataToRender.length) + 1}`}
                      />
                    </div>
                  ))
                ) : (
                  <CircularProgress className={classes.placeItem} />
                )}
              </div>
              {dataToRender && dataToRender.length > 0 && (
                <BottomNav
                  currentValue={currentPage}
                  maxValue={maxPage}
                  onChange={this.bottomNavHandler}
                />
              )}
            </div>
            <div className={classes.rightPanel}>
              <div className={classes.map}>
                <MapBox markers={markers}/>
              </div>
            </div>
          </main>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
