import React from 'react'
import TextType from './TextType.jsx'


const Inicio = () => {
  return (
    <div className='bg-black/50 h-screen w-full text-center p-50 '>
      <TextType 
      className='text-white text-5xl font-bold text-center w-full '
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
