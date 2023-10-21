import React, { useEffect, useState } from 'react';
import './App.css';

const api =
    "https://geo.ipify.org/api/v2/country?apiKey=at_YmyDr9fXPvZ98nmmc9Wg5HezwUENh";

function App() {
    const {ipAddress, setIpAddress} = useState(null)
} 
    
    useEffect(() => {
        fetch(api)
        .then((response) => response.json())
        .then((data) => {
            setIpAddress(data.ip);
        })
        })
        .catch((error) => {
            console.error('Error when calling IP address:', error);
        });
 []; 

return (
    <div>
        <h2>Your IP Address:</h2>
        <p></p>
    </div>
    );


export default IpAddress;