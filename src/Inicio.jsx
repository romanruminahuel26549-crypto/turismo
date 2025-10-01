import React from 'react'
import TextType from './TextType.jsx'


const Inicio = () => {
  return (
    <div className='h-screen w-full items-center flex justify-center'>
      <TextType 
      className='text-white text-5xl font-bold w-full'
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
