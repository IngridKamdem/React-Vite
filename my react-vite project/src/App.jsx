import React, { useState } from 'react';
import './App.css';
import IpAddress from './components/IpAddress';
import GeoInfo from './components/GeoInfo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <IpAddress/>
    <GeoInfo/>
    </div>
  );
};

export default App;
