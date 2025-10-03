import React, { useEffect } from 'react';

const eventos = [
    { id: 1,
        Fecha: '20-9-2025',
        Hora:'8:00 a 16:00hs',
        Lugar: 'Esquel, Chubut',
        Descripcion: 'Curso de Iniciacion a la observacion de aves, organizado por el PNLA y COA Diucon'
    },
    { id: 2, 
        Fecha: '21-9-2025',
        Hora: '08:00 a 13:00hs',
        Lugar: 'Esquel, Chubut',
        Descripcion: 'reserva natural urbana Laguna La Zeta, salida de campo del curso de iniciacion a la observacion de aves'
    },
    { id: 3, 
        Fecha:'22-09-2025',
        Hora: '16:00hs',
        Lugar: 'Parque Nacional Los Alerces',
        Descripcion: 'Centro de visitantes de Villa Futalaufquen, Taller de anfitrion turistico',
    },
    { id: 4,
        Fecha: '23-09-2025',
        Hora: '10:00hs, 14:00 y 16:00hs',
        Lugar: 'Esquel, Chubut',
        Descripcion: 'Entrega de Premios y guia del reloj de sol, y la historia de la ciudad',
    },
    { id: 5,
        Fecha: '25-09-2025',
        Hora: '09:30hs, 11:00hs, 16:00hs(T), 18:00 y 22:00hs',
        Lugar: 'Esquel, Trevelin',
        Descripcion: 'Caminata, Inauguracion de la plazoleta: "de la vida" y concierto. Tour de la ciudad de Trevelin',
    },
    { id: 6,
        Fecha: '26-09-2025',
        Hora: '10:30 a 11:30hs, 17:00hs(T), 18:00 y 22:00hs',
        Lugar: 'Esquel, Trevelin',
        Descripcion: 'Paseo urbano Esquel, Concierto. Cumpleaños de Draig Goch celebrandolo en el dia mundial del turismo',
    },
    { id: 7,
        Fecha: '27-09-2025',
        Hora: '11:00 a 13:00hs, 18:00hs(T), 20:00hs(T) 19:00 y 23:00hs',
        Lugar: 'Esquel, Trevelin',
        Descripcion: 'Encuentro de experiencias turisticas y Concierto. Carrera: "Senderos de Trevelin" y Concierto de murgas',
    },
   { id: 8,
        Fecha: '28-09-2025',
        Lugar: 'Esquel',
        Descripcion: 'Tetratlon Douglas Berwyn',
    },
    { id: 9,
        Fecha: '30-09-2025',
        Hora: '14:00 a 18:00hs, 17:00hs',
        Lugar: 'Esquel, Chubut',
        Descripcion: 'Visita centrada en la coronazicion galesa y su religiosidad. Plaza del Cielo: Programa Transhumancias',
    },
     { id: 10,
        Fecha: '01-10-2025',
        Hora: '16:00 a 20:00hs y 21:00hs',
        Lugar: 'Esquel, Chubut',
        Descripcion: 'Campus Cienfico Tecnologico y Funcion especial en el Planetario',
    },
     { id: 11,
        Fecha: '02-10-2025',
        Hora: '16:00 a 20:00hs(T), 20:00hs',
        Lugar: 'Esquel, Trevelin',
        Descripcion: 'Clase abierta de Juan Falu. Viñas de Nant y Fall, y Jornada comarcales de produccion y turismo',
    },
     { id: 12,
        Fecha: '03-10-2025',
        Hora: '10:00 a 11:30hs, 16:00 a 20:00hs, 19:00hs y 21:00hs',
        Lugar: 'Esquel',
        Descripcion: 'Paseo urbano Esquel con Juan Falu, Primeras jornadas comarcales de produccion y turismo, encuentro de trabajo, Concierto de Juan Falu',
    },
     { id: 13,
        Fecha: '04-10-2025',
        Hora: '09:30 a 10:00hs, 10:00 a 12:00hs, 10:00 a 17:00hs, 12:30 a 13:30hs, 21:00hs(T)',
        Lugar: 'Trevelin, PNLA',
        Descripcion: 'Concierto de Juan Falu y actividades variadas en Trevelin',
    },
     { id: 14,
        Fecha: '05-10-2025',
        Hora: '19:00hs',
        Lugar: 'Centro Cultural Melipal',
        Descripcion: 'Funcion del ciclo de cine y filosofia',
    },
     { id: 15,
        Fecha: '06-10-2025', 
        Hora: '19:00hs',
        Lugar: 'Hotel Sol del Sur',
        Descripcion: 'Charla Informatica de turismo',
    },
     { id: 16,
        Fecha: '07-10-2025',
        Hora: '19:00hs',
        Lugar: 'Sede Esquel de la UNPSJB',
        Descripcion: 'Reunion periodica: Asociacion de Fotografos de la Naturaleza',
    },
];
const Evento = () => {
  return (
    <div className='m-5 text-white'>
        <h1 className='my-10'>
            Componen la Fiesta un amplio conjunto de actividades presenciales que se realizarán tanto en Esquel y Trevelin, como en el Parque Nacional Los Alerces, evidenciando así el espíritu comarcal de la celebración. El cronograma completo y el detalle de la localización de cada una de las actividades de la edición 2025 se despliegan a continuación.
        </h1>
        
    <table class="table-fixed">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Hora</th>
      <th>Lugar</th>
        <th>Descripcion</th>
    </tr>
  </thead>
  <tbody>
      {eventos.map((evento) => (
            <tr key={evento.id} className='hover:bg-gray-200 dark:hover:bg-gray-700'>
                <td className='w-1/4 border-separate border-spacing-2 border border-gray-400'>{evento.Fecha}</td>
                <td className='w-1/4 border-separate border-spacing-2 border border-gray-400 dark:border-gray-500'>{evento.Hora}</td>
                <td className='w-1/4 border-separate border-spacing-2 border border-gray-400 dark:border-gray-500'>{evento.Lugar}</td>
                <td className='w-1/4 border-separate border-spacing-2 border border-gray-400 dark:border-gray-500'>{evento.Descripcion}</td>
            </tr>
        ))}
  </tbody>
</table>
        <h2 className='my-10'>
            Quienes quieran consultar sobre cualquier aspecto relacionado con la Fiesta, pueden hacerlo comunicándose por whatsapp con el número +54 9 2945 525009
        </h2>
    </div>

    
  );
};

export default Evento;
