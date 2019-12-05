import React from "react"
import { GoogleMap, withGoogleMap } from "react-google-maps"

const GoogleMapExample = withGoogleMap(_props => {
  return (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}
    ></GoogleMap>
  )
})

export const ViewMap = () => {
  return (
    <GoogleMapExample
      containerElement={<div style={{ height: `500px`, width: "500px" }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}
