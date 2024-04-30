import { useEffect, useState } from 'react';
import CartaPokemon from './Components/CartaPokemon/CartaPokemon';
import './App.css';

function numRandom(){
  return Math.floor(Math.random() * 150) + 1;
} 

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [numId, setNumId] = useState(numRandom());
  const [loading, setLoading] = useState(false); // Estado para controlar la carga

  useEffect(() => {
    const pickPokemon = async () => {
      setLoading(true); // Activar la carga antes de la solicitud
      try {
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
          <CartaPokemon pokemon={pokemon}/>
          <button className="mt-4" onClick={handleReload} disabled={loading}>
            {loading ? <div className="loader"></div> : 'Generar Pokémon'}
          </button> {/* Deshabilitar el botón mientras está cargando */}
        </>
      )}
    </>
  );
}
