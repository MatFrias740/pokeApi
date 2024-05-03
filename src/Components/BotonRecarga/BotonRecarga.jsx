import React from 'react'; // Importa React

const ReloadButton = ({ onClick, loading }) => {
  return (
    <>
      {loading ? (
        <button className="mt-4" onClick={onClick} disabled>
          Cargando...
        </button>
      ) : (
        <button className="mt-4" onClick={onClick}>
          Generar Pokémon
        </button>
      )}
    </>
  );
}

export default ReloadButton;
