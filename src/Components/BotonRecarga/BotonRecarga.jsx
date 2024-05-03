import React from 'react'; // Importa React


const ReloadButton = ({ onClick, loading }) => {
  return (
    <>
      {loading ? (
        <button className="miButton mt-4" onClick={onClick} disabled>
          Cargando...
        </button>
      ) : (
        <button className="miButton mt-4" onClick={onClick}>
          Generar Pokémon
        </button>
      )}
    </>
  );
}

export default ReloadButton;
