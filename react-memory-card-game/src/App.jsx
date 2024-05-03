import { useState, useEffect } from 'react'
import './App.css'

async function fetchPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const pokemonData = await response.json();
  return pokemonData;
}

function PokemonDetails() {
  // const pokemonList = ['pikachu', 'charizard', 'bulbasaur', 'squirtle' ];
  // const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  const randomPokemon = Math.floor(Math.random() * 100) + 1;
  
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemon(randomPokemon)
      .then(data => setPokemon(data))
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, []);

  const handleClick = () => {
    // const pokemonList = ['pikachu', 'charizard', 'bulbasaur', 'squirtle' ];
    // const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
    const randomPokemon = Math.floor(Math.random() * 100) + 1;

    fetchPokemon(randomPokemon)
      .then(data => {
        setPokemon(data);
      })
      .catch(error => console.error('Error fetching Pokemon data:', error));
  };

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} onClick={handleClick} />
    <h2>{pokemon.name}</h2>
    <p>{pokemon.moves['0'].move.name}</p>
    <p>{pokemon.types['0'].type.name}</p>
    <p>{pokemon.stats['0'].base_stat}</p>
    </>
  )
}


function App() { 
  const score = 0;

  return (
    <>
      <div className="content">

        <div className="header">
          <div className="header-left">
            <div className="header-left-title"><h1>Pokemon Fight Card Game</h1></div>
            <span>Click to change pokemon, let the fight begin!</span>
          </div>

          <div className="header-right">
            <span>Score: {score}</span>
            <span>Best Score: {score}</span>
          </div>
        </div>


        <div className="game">
          <div className="card">
            <PokemonDetails />
          </div>
          <div className="card">
            <PokemonDetails />
          </div>
        </div>
      
      
      </div>
    </>
  )
}

export default App
