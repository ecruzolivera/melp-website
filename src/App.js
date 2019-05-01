import React, { Component, Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import CssBaseline from "@material-ui/core/CssBaseline"

import TopAppBar from "./components/TopAppBar"
import PlaceCard from "./components/PlaceCard"

import { withStyles } from "@material-ui/core/styles"

const data = [
  {
    id: "851f799f-0852-439e-b9b2-df92c43e7672",
    rating: 1,
    name: "Barajas, Bahena and Kano",
    contact: {
      site: "https://federico.com",
      email: "Anita_Mata71@hotmail.com",
      phone: "534 814 204"
    },
    address: {
      street: "82247 Mariano Entrada",
      city: "Mérida Alfredotown",
      state: "Durango",
      location: { lat: 19.440057053713137, lng: -99.12704709742486 }
    }
  }
]

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
        {data ? (
          <Grid key={data[0].id} item>
            <PlaceCard {...data[0]} />
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Fragment>
  )
}

export default App
