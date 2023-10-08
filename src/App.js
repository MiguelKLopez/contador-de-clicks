import './App.css';
import { useState } from 'react';
import Boton from './componentes/Boton.js'
import Contador from './componentes/Contador.js';
import logo from './img/gitlab.png'

function App() {
  const [numClicks, setNumClicks] = useState(0)
  const manejarClick = () => {
    if (numClicks < 100) {
      setNumClicks(numClicks + 1);
    } else {
      setNumClicks(0);
    }
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className = "App"> 
      <div className = 'logo-contenedor'>
        <img
           className = 'logo'
           src = {logo}
           alt = 'Logo de GitLab'
          />
      </div>
      <div className = 'contenedor-principal'>
        <Contador 
          numClicks = {numClicks}
        />
        <Boton 
          texto = "Click"
          esBotonClick = {true}
          manejarClick = {manejarClick}
        />
        <Boton 
          texto = "Reiniciar"
          esBotonClick = {false}
          manejarClick = {reiniciarContador}
        /> 
      </div>
    </div>
  );
}

export default App;
