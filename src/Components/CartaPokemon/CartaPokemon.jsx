/* eslint-disable react/prop-types */


function PokemonCard({ pokemon, loading }) {
  return (
    <>
    <div className="pokemon-card flex items-center flex-col bg-white shadow-xl rounded-2xl h-80 w-72 justify-around relative overflow-hidden">
          <img
            className="block w-full h-28 -mt-4"
            src={"./assets/bg-pattern-card.svg"}
          />
          <div className="card-body flex flex-col">
            <img
              className="w-40 h-40 rounded-full -mt-24  bg-white"
              src={ loading? "https://pm1.aminoapps.com/6532/8441679e98967e38588e00e7a65f788ca0f820ee_00.jpg" 
                 : pokemon.sprites.other.dream_world.front_default}

            />
            <p className="text-sm  text-gray-500">
            
              <span className="font-bold capitalize text-sm text-black">
                {pokemon.name}</span>{" "} 
                {pokemon.stats[0].base_stat} hp

            </p>
            <p className="text-sm mt-1  text-gray-500">
              {pokemon.base_experience} exp
            </p>
          </div>
          <div className="text-black text-sm flex flex-row justify-around w-full content-center border-t border-black-500 py-5">
            <div className="flex flex-col">
              <h3 className="font-bold text-xs mb-1">{pokemon.stats[1].base_stat}</h3>
              <p className="text-xs">Ataque</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-xs mb-1">{pokemon.stats[3].base_stat}</h3>
              <p className="text-xs">Ataque Especial</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-xs mb-1">{pokemon.stats[2].base_stat}</h3>
              <p className="text-xs">Defensa</p>
            </div>
          </div>
        </div>
        </>
  );
}

export default PokemonCard;
