import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Frase from './components/Frase';


export default function App() {

  const [frase,obtenerFrase] = useState({});

  /* Consulta a una rest api */
  const consultarAPI = async ()=>{
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    
    //console.log(resultado.data[0]);
    /* agregar el resultado de la API al state; (similar a this.useState) */

    obtenerFrase(resultado.data[0]);
    
  }

  useEffect(()=>{
    consultarAPI();
  }, [])
  
  //console.log(frase);
  
  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      />
      <button onClick={consultarAPI}>Generar Nueva</button>
    </div>
  )
}
