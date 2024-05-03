import { useEffect, useState } from 'react';
import CartaPokemon from './Components/CartaPokemon/CartaPokemon';
import BotonRecarga from './Components/BotonRecarga/BotonRecarga';
import { numRandom } from './Components/NumRandom/NumRandom';
import './App.css';



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
          <CartaPokemon pokemon={pokemon} loading={loading}/>
          <BotonRecarga onClick={handleReload} loading={loading}/>
        </>
      )}
    </>
  );
}
