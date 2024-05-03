import { useEffect, useState } from 'react';
import CartaPokemon from './Components/CartaPokemon/CartaPokemon';
import './App.css';


//---> Esta funcion la puedes meter dentro del componente
function numRandom() {
  return Math.floor(Math.random() * 150) + 1;
}


//---> En App importa los componentes para dejarlos lo mas limpio posible
//---> Mueve toda la logica a otro componente
//---> Mira el orden como declaraste variables, funciones,etc. dentro del componente

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [numId, setNumId] = useState(numRandom());
  const [loading, setLoading] = useState(false); // Estado para controlar la carga

  useEffect(() => {
    const pickPokemon = async () => {
      setLoading(true); // Activar la carga antes de la solicitud
      try {

        //---> Funciona bien, pero cambia la forma del fetch y utiliza el then para contatenar el siguiente paso con "data"
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numId}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Desactivar la carga después de la solicitud (independientemente del resultado)
      }
    };
    pickPokemon();
  }, [numId]);

  const handleReload = () => {
    if (!loading) { // Solo se puede recargar si no hay una carga en curso
      setNumId(numRandom);
    }
  }

  return (
    <>
      {pokemon && (
        <>
          <CartaPokemon pokemon={pokemon} />
          <button className="mt-4" onClick={handleReload} disabled={loading}>

            {/*---> Cuando esta cargado se quita el texto y el boton se hace pequeño, eso no debe pasar.
               ---> Cuando este cargando aparte del texto debe aparecer un spinner indicando que se esta haciendo la peticion
          */}
            {loading ? <div className="loader"></div> : 'Generar Pokémon'}
          </button> {/* Deshabilitar el botón mientras está cargando */}
        </>
      )}
    </>
  );
}
