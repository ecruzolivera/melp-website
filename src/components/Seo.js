import React from 'react'
import { Helmet } from 'react-helmet'

export default () => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>Melp: The best food directory</title>
    <meta
      name='description'
      content='The best food directory website, Yelp has nothing on us.'
    />
    <meta name='keywords' cpntent='food,search,yelp, directory' />
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
    />
    <link
      rel='stylesheet'
      href='https://unpkg.com/leaflet@1.4.0/dist/leaflet.css'
      integrity='sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=='
      crossorigin=''
    />
  </Helmet>
)
