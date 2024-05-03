import { useEffect, useState } from 'react';
import CartaPokemon from './Components/CartaPokemon/CartaPokemon';
import BotonRecarga from './Components/BotonRecarga/BotonRecarga';
import { numRandom } from './Components/CartaPokemon/CartaPokemon.utils/GeneradorNum'
import './App.css';



export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [numId, setNumId] = useState(numRandom());
  const [loading, setLoading] = useState(false); // Estado para controlar la carga

  useEffect(() => {
    const pickPokemon = () => {
      setLoading(true); // Activar la carga antes de la solicitud
      fetch(`https://pokeapi.co/api/v2/pokemon/${numId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Fallo al conectar :C');
          }
          return response.json();
        })
        .then(data => {
          setPokemon(data);
          setLoading(false); // Desactivar la carga después de la solicitud
        })
        .catch(error => {
          console.error('Error al hacer fetch:', error);
          setLoading(false); // Desactivar la carga después de la solicitud en caso de error
        });
    };
    pickPokemon();
  }, [numId]);

  const handleReload = () => {
    if (!loading) { 
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
