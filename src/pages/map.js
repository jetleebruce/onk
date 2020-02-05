import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from '../components/Map/index'



const center = { lat: 56, lng: 47 }
const mapProps = {
  options: {
    center,
    zoom: 11,
    
  },
  onMount: map => {
    new window.google.maps.Marker({
      position: center,
      map,
      title: `Europe West Coast`,
   
    })
  },
}

const SecondPage = () => {

  return (
    <Layout>
      <h1 style={{ color: `white` }}>Map</h1>
      <Map/>
    </Layout>
  )
 
}

export default SecondPage
