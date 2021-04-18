import './style.css';

function Profile() {
  return ( 
    <div class="profile">
      <div class="content">
        <div class="img-container">
          <img src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" alt="Bubasauro"/>
        </div>
        <section class="id">
          <h1>#ID</h1>
        </section>
        <section class="nome">
          <h2>Bulbasaur</h2>
        </section>
      </div>
    </div>
  )
};

export default Profile;