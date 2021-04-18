import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profiles from './components/Profiles';

function App() {

  const [pokeList, mudarPokeList] = useState(null)

  var getPokemons = async () => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
      .then((res) => res.json())
      .then((pokemons) => {
        return pokemons.results;
      });
    //console.log(apiResponse)

    mudarPokeList(apiResponse);
  }


  if (!pokeList ){
    getPokemons();
  }


  return ( 
    <div>
      <Header/>
      <img className="bg-detalhes" src="./bg-detalhes.svg" alt="detalhes fundo background"/>
      <div className="bg-fundo">
        <div className="pokemon-list">
          <Profiles pokeList={pokeList}/>
        </div>
      </div> 
    </div>
  );
}

export default App;
