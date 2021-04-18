import './style.css';
import Profile from '../Profile'


function Profiles(props) {
  const pokeList = props.pokeList;
  console.log('pokeList', pokeList);
  if(!pokeList) return null

  return ( 
    <div className="profiles-list">
      {pokeList.map((itemDaLista) => {
        return(
          <Profile name={itemDaLista.name} />
        )
      })}
    </div>
  )
};

export default Profiles;