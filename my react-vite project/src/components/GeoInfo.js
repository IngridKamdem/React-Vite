import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GeoInfo({ ipAddress }) {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    if (ipAddress) {
      axios.get(`https://ipinfo.io/${ipAddress}/json`)
        .then((response) => {
          setGeoData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching geolocation data:', error);
        });
    }
  }, [ipAddress]);

  return (
    <div>
      <h2>Geographic and Time Information:</h2>
      {geoData && (
        <div>
          <p>IP Address: {geoData.ipAddress}</p>
          <p>City: {geoData.city}</p>
          <p>Region: {geoData.region}</p>
          <p>Country: {geoData.country}</p>
          <p>Timezone: {geoData.timezone}</p>
        </div>
      )}
    </div>
  );
}

export default GeoInfo;
