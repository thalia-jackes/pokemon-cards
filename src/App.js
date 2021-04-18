import './App.css';
import Header from './components/Header';
import Profiles from './components/Profiles';

function App() {
  return ( 
    <div>
      <Header/>
      <img class="bg-detalhes" src="./bg-detalhes.svg" alt="detalhes fundo background"/>
      <div class="bg-fundo">
        <div class="pokemon-list">
          <Profiles/>
        </div>
      </div> 
    </div>
  );
}

export default App;
