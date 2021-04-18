import './style.css';

function Profile(props) {
  const name = props.name;
  return ( 
    <div className="profile">
      <div className="content">
        <div className="img-container">
          <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt="Bubasauro"/>
        </div>
        <section className="nome">
          <h2>{props.name}</h2>
        </section>
      </div>
    </div>
  )
};

export default Profile;