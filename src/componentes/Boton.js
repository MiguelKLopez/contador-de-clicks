import React from 'react'
import '../css/Boton.css'

function Boton({texto, esBotonClick, manejarClick }){ // Recive props con syntax de desestructuracion
    return (
        <button // Asignamos la clase con operador ternario
            className={esBotonClick ?  'boton-click' : 'boton-reiniciar'}
            onClick={manejarClick}
        >
            {texto} 
        </button>
    )
}



export default Boton;