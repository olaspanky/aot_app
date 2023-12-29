"use client"

import React from 'react';
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api"
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useRef, useEffect } from 'react';
import ExploreIcon from '@mui/icons-material/Explore';


const center = {lat: 48.8584, lng: 2.2945}


const Map = ({ recipientAddress, senderAddress, onMapDataChange }) => {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDGyYRbfyiDGZL3EjadmqdWdXTw79QhSDU",
    libraries: ['places']
  })

  const [map, setMap] = useState(/** @type google.maps.Map*/null)
  const [directionResponse, setDirectionResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /**@type React.mutableRefobject<HTMLInputElement> */
  const originRef = useRef()
    /**@type React.mutableRefobject<HTMLInputElement> */
  const destinationRef = useRef()

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem('mapData')) || {};
    setDirectionResponse(storedData.directionResponse || null);
    setDistance(storedData.distance || '');
    setDuration(storedData.duration || '');
  
    if (originRef.current) {
      originRef.current.value = storedData.originValue || '';
    }
  
    if (destinationRef.current) {
      destinationRef.current.value = storedData.destinationValue || '';
    }
  }, []);
  

  useEffect(() => {
    const dataToStore = {
      directionResponse,
      distance,
      duration,
      origin: originRef.current ? originRef.current.value : '',
      destination: destinationRef.current ? destinationRef.current.value : '',
    };
    sessionStorage.setItem('mapData', JSON.stringify(dataToStore));
  }, [directionResponse, distance, duration, originRef.current, destinationRef.current]);


 
  useEffect(() => {
    if (isLoaded && map && recipientAddress && senderAddress) {
      calculateRoute();
    }
    onMapDataChange({
      directionResponse,
      distance,
      duration,
      // other necessary data
    });
  }, [isLoaded, map, recipientAddress, senderAddress , onMapDataChange]);

 
  async function calculateRoute() {
    if (!window.google || senderAddress === '' || recipientAddress === '') {
      return;
    }
  
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: senderAddress,
      destination: recipientAddress,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };
  
    try {
      const results = await directionsService.route(request);
  
      if (results.status === 'ZERO_RESULTS') {
        console.error('No route found between the origin and destination.');
      } else {
        setDirectionResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);
      }
    } catch (error) {
      console.error('Error calculating route:', error);
    }
  }
  
  
  

  function clearRoute(){
    setDirectionResponse(null)
    setDistance('')
    setDuration('') 
    originRef.current.value = ""
    destinationRef.current.value = ""
 }

 if (!isLoaded) {
  return <div>
    <CircularProgress/>
  </div>;
}

  return (
    <div className='h-[100vh] w-full'>

        <div className='w-full h-full relative'>
    <GoogleMap center={center} zoom={10} mapContainerStyle={{width: '100%', height: '100%'}}
    options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
    }}
    onLoad={map=> setMap(map)}
    >
        {/*makers */}
        <Marker position={center}/>
        {directionResponse && <DirectionsRenderer directions={directionResponse} />}
    </GoogleMap>

    
        </div>
    
    </div>
  );
};

export default Map;
