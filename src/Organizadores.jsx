import React from 'react';
import Carousel from './Carousel';

const Organizadores = () => {
  return (
    <div className="relative h-100 w-full items-center flex flex-col justify-center mt-30">
  <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
  <h2 className='text-white text-3xl font-bold mt-10'>
    Organizadores de las actividades del Dia del Turismo
  </h2>
  </div>

  )
}

export default Organizadores