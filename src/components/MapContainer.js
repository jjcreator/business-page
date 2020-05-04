import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react"

function MapContainer(props) {
    const style = {
        width: "100%",
        height: "50vh",
        margin: "0",
        padding: "0"
    }
    return (
        <div>
            <Map 
                google={props.google} 
                style={style} 
                initialCenter={{
                    lat:51.591419,
                    lng: 19.135500
                }}
                zoom={15}/>
        </div>
    )
}

export default GoogleApiWrapper({apiKey: "AIzaSyDW-VG29sX7xcSAX4sgWOtR1b_Qjec0P_4"})(MapContainer);
