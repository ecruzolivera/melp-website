import React from 'react'
import { Helmet } from 'react-helmet'

export default () => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>Melp: The best food directory</title>
    <meta name='description' content='The best food directory website, Yelp has nothing on us.' />
    <meta name='keywords' cpntent='food,search,yelp, directory' />
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
    />
  </Helmet>
)
