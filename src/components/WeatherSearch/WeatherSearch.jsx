import React from 'react';
import { useState } from 'react';

function WeatherSearch({onChangeCity}) {
  const [city, setCity] = useState('');

  function handleChange(e) {
  setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!city || city !== "") {
      onChangeCity(city);
    }
  }


  return (
    <div className='absolute '>
      <form 
            onSubmit={handleSubmit}>
      <input 
        className='w-60 h-10 m-8 rounded-lg border-solid border-2 border-green-950'
        type="text"
        value={city}
        onChange={handleChange}
      />
    </form>
    </div>
    
  );
}

export default WeatherSearch;