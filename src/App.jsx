import './App.css'
import Evento from './Evento.jsx';
import CardNav from './CardNav.jsx'
import logo from './assets/esquel.png';
import { Link, Route, Routes } from 'react-router';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Fiestas from './Fiestas.jsx';
import Alojamiento from './Alojamiento.jsx';
import Excursiones from './Excursiones.jsx';

const Botones=()=>{
  const botones = [
    { id: 1, texto: 'Inicio' },
    { id: 2, texto: 'Conocé' },
    { id: 3, texto: 'Dónde comer' },
    { id: 4, texto: 'Contacto' },
    { id: 5, texto: 'Esqui La Hoya' }
  ];
  
  return (
    <div className="flex justify-center">
      {botones.map((boton) => (
        <button className= 'bg-emerald-600 my-5 m-12 p-2 hover:bg-green-700 rounded-full cursor-pointer text-white' key={boton.id}>
          {boton.texto}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  
  
  const items = [
    {
      label: "Inicio",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Conocé", ariaLabel: "Inicio Conocé", link:"/home"},
        { label: "¿Qué hacer en Esquel?", ariaLabel: "Inicio ¿Qué hacer en Esquel?", link:"/contact"},
        { label: "Fiestas Locales", ariaLabel: "Fiestas Locales Contacto", link: "/fiestas" }
      ]
    },
    {
      label: "Planificaciones", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Alojamiento", ariaLabel: "Alojamiento Planificaciones", link:"/alojamiento" },
        { label: "Excursiones y Aventura", ariaLabel: "Project Excursiones y Aventura", link:"/excursiones" },
        { label: "Gastronomía", ariaLabel: "Gastronomía Planificaciones" },
      ]
    },
    {
      label: "Redes Sociales",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Facebook", ariaLabel: "Facebook us", link: "https://www.facebook.com/TurismoEsquel" },
        { label: "Twitter", ariaLabel: "Twitter", link:"https://x.com/TurismoEsquel" },
        { label: "Instagram", ariaLabel: "Instagram", link:"https://www.instagram.com/turismoesquelok/" },
        { label: "YouTube", ariaLabel: "YouTube", link:"https://www.youtube.com/user/esquelturistica" }
      ]
    }
  ];

  return (
    

    
    <div className=' h-screen bg-[url(https://backstrapi.latitur.com/uploads/copy_old_1755575214442_9da72369_996f_4c0e_a794_3a1231a27df1_cf7f61e7a3.webp?w=640&q=75)] bg-cover bg-no-repeat '>
      <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
    <div className='bg-black/50'>
<div className=' p-20'>
    <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/fiestas" element={<Fiestas />} />
  <Route path="/alojamiento" element={<Alojamiento />} />
  <Route path="/excursiones" element={<Excursiones />} />

</Routes>
</div>


      </div>
      </div>
  );
}


