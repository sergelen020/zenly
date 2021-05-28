import React, {useRef, useState, useEffect} from 'react';
import './hii.scss'
import firebase, {firestore, auth} from './firebase';

function Map() {
    const GOOGLE_API_KEY = 'AIzaSyDD1bL9fKZ3r1YsNSBNd7kWwVyW3F4FkV4'
    const ulaanbaatar = { lat:47.8917951, lng:106.7617869};

    const mapElementRef =useRef()
    const mapRef = useRef(null)
    const [markers, setMarkers] = useState([])
    const markerRef = useRef();
    const trackingRef = useRef()

    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener('load', onGoogleMapLoad);
        trackMyLocation();
    }, [])    

    const onGoogleMapLoad = () => {
            mapRef.current = new window.google.maps.Map(mapElementRef.current, {
            center: ulaanbaatar,
            zoom: 16
        });
        new window.google.maps.Marker({
            position: ulaanbaatar,
            title: "Hello World!",
          });
    }
    
    const trackMyLocation = () => {
        trackingRef.current = navigator.geolocation.watchPosition(position => {
            const {latitude, longitude} = position.coords;
            console.log(latitude, longitude)
            firestore.collection('tracking').add({
                lat: latitude,
                lng: longitude
            })
            .then(()=> {
                console.log("hiii")
            })
            .catch((error) => {
                console.error(error);
            })
        }, console.error, {maximumAge: 3000})
    } 

    return (
        <div className="home-page">
            <div ref={mapElementRef} className="map"></div>
        </div>
    )
}

export default Map
