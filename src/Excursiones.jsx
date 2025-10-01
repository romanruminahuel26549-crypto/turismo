import React from 'react'

const Excursiones = () => {
  return (
    <div>
      <h2 className='text-white m-10'>Visite Esquel y descubra sus paisajes, lagos, bosques y montañas. Además de viajar en La Trochita, visitar el centro de esquí La Hoya o los pueblos de los alrrededores. Un lugar ideal para el verano</h2>
        <article className='mt-10'>
          <a class="sm:float-start" href="https://www.esquel.gov.ar/la-trochita">
            <img  src="https://www.clarin.com/img/2020/05/26/DAHX38jcY_1200x0__1.jpg" className='w-80 h-50  border-2' />
          </a>
            <p className='text-white'>El Viejo Expreso Patagónico, "La Trochita", es uno de los pocos trenes a vapor, sino el único, con una trocha angosta de 75 cm. El mantenimiento del carácter original del servicio, y en particular de sus legendarias locomotoras a vapor de 1922 todavía en uso, son consideradas piezas únicas, inclusive por las propias firmas fabricantes.</p>
        </article>

        <article className='mt-10'>
          <a class="sm:float-right" href="https://www.interpatagonia.com/esquel/lagos-parque-nacional-los-alerces.html">
            <img src="https://estudia-en-argentina.com.ar/wp-content/uploads/2025/01/Parque-Nacional-Los-Alerces-Una-joya-natural-de-la-Patagonia-que-no-te-puedes-perder-1.webp" className='w-80 h-50 border-2' />
          </a>
            <p className=' text-white'>El Parque Nacional Los Alerces es un área protegida y patrimonio mundial de la Unesco​ que se encuentra en la provincia del Chubut, Argentina.</p>
        </article>

        <article className='my-25 mt-20'>
          <a class="sm:float-left" href="https://www.lanacion.com.ar/sociedad/cerro-la-hoya-precio-y-horario-del-centro-de-esqui-de-esquel-nid09072025/">
            <img src="https://www.eldiarioweb.com/wp-content/uploads/2023/06/la-hoya.jpg" className='w-80 h-50 border-2' />
          </a>
            <p className=' text-white'>La Hoya es un centro de esquí y snowboard, ubicado a 13 km de la ciudad de Esquel en la provincia del Chubut, Argentina.
            La orientación sur del cerro hace que sus pistas reciban poca insolación, por lo que se crean las condiciones necesarias para la formación de la nieve en polvo que lo caracteriza y hace atractivo internacionalmente.</p>
        </article>
      </div>
  )
}   

export default Excursiones