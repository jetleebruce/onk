import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as parkDate from '../../data/parks.json'
import SkaterImage from './imageskater'

import Mapstyles from './map.module.css'

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 56.632339,
    longitude: 47.894089,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  })
  const [selectedPark, setSelectedPark] = useState(null)
  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedPark(null)
      }
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiamV0bGVlYnJ1Y2UiLCJhIjoiY2s1em5qd216MGJmeDNub2IzNHBhaXl0dSJ9.Ew8vM8DqEMqQXlhC5oenwQ'
        }
        mapStyle='mapbox://styles/jetleebruce/ck5zoi9uq0zaf1is1feln5uqt'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className={Mapstyles.markerbtn}
              onClick={e => {
                e.preventDefault()
                setSelectedPark(park)
              }}
            >
              <div className={Mapstyles.wrapper}>
                <SkaterImage />
              </div>
            </button>
          </Marker>
        ))}
        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null)
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}
