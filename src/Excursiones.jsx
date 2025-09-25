import React from 'react'

const Excursiones = () => {
  return (
    <div>
        <p class="pt-10 font-[Open_Sans] ... m-5  text-white">
        Esquel es una ciudad argentina a los pies de la cordillera de los Andes. Es conocida por ser la parada más austral del tren a vapor de vía estrecha La Trochita, que alguna vez recorrió más de 400 km a través de la Patagonia. Al oeste de la ciudad, se encuentra el Parque Nacional Los Alerces, que alberga bosques, lagos, cascadas y pudúes poco comunes. Cerca está la montaña La Hoya, un hábitat de guanacos con vista a todo el valle.
        </p>
        <h2 className='m-5 text-white'>Visite Esquel y descubra sus paisajes, lagos, bosques y montañas. Además de viajar en La Trochita, visitar el centro de esquí La Hoya o los pueblos de los alrrededores. Un lugar ideal para el verano</h2>
        <div>
      <div className='flex justify-center'>
        <a href="https://www.interpatagonia.com/esquel/lagos-parque-nacional-los-alerces.html">
          <img src="https://estudia-en-argentina.com.ar/wp-content/uploads/2025/01/Parque-Nacional-Los-Alerces-Una-joya-natural-de-la-Patagonia-que-no-te-puedes-perder-1.webp" className='w-90 h-50 m-5 border-2' />
        </a> 
        <a href="https://www.esquel.gov.ar/la-trochita">
          <img src="https://www.clarin.com/img/2020/05/26/DAHX38jcY_1200x0__1.jpg" className='w-90 h-50 m-5 border-2' />
        </a>
        <a href="https://www.lanacion.com.ar/sociedad/cerro-la-hoya-precio-y-horario-del-centro-de-esqui-de-esquel-nid09072025/" >
          <img src="https://www.eldiarioweb.com/wp-content/uploads/2023/06/la-hoya.jpg" className='w-90 h-50 m-5 border-2' />
        </a>
      </div>
    </div>
    </div>
  )
}   

export default Excursiones