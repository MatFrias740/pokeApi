import { useEffect, useState } from 'react';
import CartaPokemon from './Components/CartaPokemon/CartaPokemon';
import BotonRecarga from './Components/BotonRecarga/BotonRecarga';
import { numRandom } from './Components/NumRandom/NumRandom';
import './App.css';


<<<<<<< HEAD
=======
//---> Esta funcion la puedes meter dentro del componente
function numRandom() {
  return Math.floor(Math.random() * 150) + 1;
}


//---> En App importa los componentes para dejarlos lo mas limpio posible
//---> Mueve toda la logica a otro componente
//---> Mira el orden como declaraste variables, funciones,etc. dentro del componente
>>>>>>> 6d585585e102c0c623917a71054d6eb09f604f98

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
      setNumId(numRandom()); // Utiliza la función para generar un nuevo número aleatorio
    }
  }



  return (
    <>
      {pokemon && (
        <>
<<<<<<< HEAD
          <CartaPokemon pokemon={pokemon} loading={loading}/>
          <BotonRecarga onClick={handleReload} loading={loading}/>
=======
          <CartaPokemon pokemon={pokemon} />
          <button className="mt-4" onClick={handleReload} disabled={loading}>

            {/*---> Cuando esta cargado se quita el texto y el boton se hace pequeño, eso no debe pasar.
               ---> Cuando este cargando aparte del texto debe aparecer un spinner indicando que se esta haciendo la peticion
          */}
            {loading ? <div className="loader"></div> : 'Generar Pokémon'}
          </button> {/* Deshabilitar el botón mientras está cargando */}
>>>>>>> 6d585585e102c0c623917a71054d6eb09f604f98
        </>
      )}
    </>
  );
}
