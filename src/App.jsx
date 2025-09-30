import CardNav from './CardNav.jsx'
import logo from './assets/esquel.png';
import { Route, Routes } from 'react-router';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Fiestas from './Fiestas.jsx';
import Alojamiento from './Alojamiento.jsx';
import Excursiones from './Excursiones.jsx';
import Inicio from './Inicio.jsx';

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
        { label: "Actividades: Dia del Turismo", ariaLabel: "Inicio Actividades", link:"/contact"},
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

    <div className=' bg-center bg-[url(https://tripin.travel/wp-content/uploads/2016/07/Laguna-La-Zeta-@juanbalestra-web.jpg)] bg-cover bg-no-repeat '>
      <CardNav
      logo={"https://www.entornoturistico.com/wp-content/uploads/2025/08/Logo-del-Dia-Mundial-del-Turismo-2025-en-espanol_HOR.png"}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
   
    <div className='bg-black/50 Min-h-screen w-full text-center p-5 '>
<div className=' sd:p-20'>
    <Routes>
  <Route path="/inicio" element={<Inicio />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/fiestas" element={<Fiestas />} />
  <Route path="/alojamiento" element={<Alojamiento />} />
  <Route path="/excursiones" element={<Excursiones />} />
  <Route path="de vuelta" element={<Inicio />} />

</Routes>
</div>


      </div>
      </div>
  );
}


