import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
import React from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
    //   textAlign: "center",
    //   alignItems: "center",
    //   justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
)

const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <Icon icon={locationIcon} className="pin-icon" /> */}
    <p className="pin-text">{text}</p>
  </div>
)

export default function GoogleMapPage() {
  const defaultProps = {
    // center: {lat:5 5.95, lng: 30.33},

    center: {
      //
      lat: 1.3833375954129705,
      lng: 103.83126309737506,
    },
    zoom: 5,
  }

  return (
    // Important! Always set the container height explicitly
    // <div style={{ height: "100vh", width: "100%" }}>
    <>
    <img src="" />
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD1Iyed2izpg6CLuvFHmyJhawG3aHqVgns" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
        <AnyReactComponent
          // , 103.82827621974
          lat={1.379397201441663}
          lng={103.82827621974}
          text={"Hogwarts"}
          />
      </GoogleMapReact>
    </div>
          </>
  )
}