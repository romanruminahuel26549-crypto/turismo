import React from 'react'
import TextType from './TextType.jsx'


const Inicio = () => {
  return (
    <div className='bg-black/50 h-screen w-full text-center items-center'>
      <TextType 
      className='text-white text-5xl mt-5 font-bold text-center w-full h-full'
        text={["Dia del Turismo", "Bienvenidos a Esquel", "Feliz Dia del Turismo!"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    
      />
    </div>
  )
}

export default Inicio
