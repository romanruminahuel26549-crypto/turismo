import React from 'react'

const Home = () => {
  return (
    <div className='h-screen'>
        <h1 class="font-bold underline text-white m-10">CIUDAD DE ESQUEL</h1>
        <p class="font-[Open_Sans] mt-10 text-white">
        Esquel es una ciudad argentina a los pies de la cordillera de los Andes. Es conocida por ser la parada más austral del tren a vapor de vía estrecha La Trochita, que alguna vez recorrió más de 400 km a través de la Patagonia. Al oeste de la ciudad, se encuentra el Parque Nacional Los Alerces, que alberga bosques, lagos, cascadas y pudúes poco comunes. Cerca está la montaña La Hoya, un hábitat de guanacos con vista a todo el valle.
        </p>
        <div className='w-80 h-40 mt-10 mx-auto'>
          <img src="https://www.climatestotravel.com/images/argentina/esquel.jpg" />
        </div>
    </div>
  )
}

export default Home