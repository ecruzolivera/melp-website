import React, { Component, Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import CssBaseline from "@material-ui/core/CssBaseline"

import TopAppBar from './components/TopAppBar'
import { withStyles } from "@material-ui/core/styles"

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <TopAppBar onChange={console.log} />
      <Grid
        container
        alignContent='center'
        justify='center'
        alignItems='center'
      >
        <CircularProgress />
      </Grid>
    </Fragment>
  )
}

export default App
