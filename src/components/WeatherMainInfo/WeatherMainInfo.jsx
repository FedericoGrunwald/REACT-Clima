import React from 'react'

function WeatherMainInfo({weather}) {
  return (
    <div className='flex flex-col items-center mt-20'>
        <div className='font-bold text-xl mb-2'>
          {weather?.location?.name}
        </div>
        <div className='font-bold text-xl'>
          {weather?.location?.country}
        </div>
        <div className='flex items-center gap-6 '>
            <div>
                <img src={`http:${weather?.current?.condition?.icon}`}
                width="70" alt={weather?.current?.condition?.text}/>
            </div>
            <div className="flex flex-col mt-4"> 
              <div className='font-bold text-xl'>
                {weather?.current?.condition.text} 
              </div>
              <div className='flex justify-center font-bold text-xl'>
                {weather?.current?.temp_c}°
              </div>
            </div>
        </div>
        <iframe 
        className='m-5 w-72 h-72 rounded-lg border-solid border-2 border-green-950 '
        src= {`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1826510.4835620269!2d${weather?.location.lon}!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1687526992611!5m2!1ses!2sar`} 
        style={{border:0}} 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default WeatherMainInfo