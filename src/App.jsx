import React from 'react';
import WeatherData from './components/WeatherData/WeatherData';

function App() {
 
  return (
    <div className='flex justify-center mt-20' >
      <div className='shadow-2xl  flex justify-center items-center w-96 rounded-lg border-solid border-2 border-green-950 bg-lime-100'>
      <WeatherData />
      </div>
    </div>
    
  );
}

export default App;
