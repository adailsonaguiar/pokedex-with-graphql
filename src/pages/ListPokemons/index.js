import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => {
  return (
    <div className="container">
      <Link to={'/details/:name'}>
        <div className="card-pokemon">
          <div className="container-image">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
          </div>
          <div className="card-info">
            <h2 className="name-pokemon">Bubasaur</h2>
            <div className="pokemon-type">
              <div className="type-fire">Fire</div>
              <div className="type-fire"></div>
            </div>
          </div>
        </div>
      </Link>
      <div className="card-pokemon">
        <div className="container-image">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
        </div>
        <div className="card-info">
          <h2 className="name-pokemon">Bubasaur</h2>
          <div className="pokemon-type">
            <div className="type-fire">Fire</div>
            <div className="type-fire"></div>
          </div>
        </div>
      </div>
      <div className="card-pokemon">
        <div className="container-image">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
        </div>
        <div className="card-info">
          <h2 className="name-pokemon">Bubasaur</h2>
          <div className="pokemon-type">
            <div className="type-fire">Fire</div>
            <div className="type-fire"></div>
          </div>
        </div>
      </div>
      <div className="card-pokemon">
        <div className="container-image">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
        </div>
        <div className="card-info">
          <h2 className="name-pokemon">Bubasaur</h2>
          <div className="pokemon-type">
            <div className="type-fire">Fire</div>
            <div className="type-fire"></div>
          </div>
        </div>
      </div>
      <div className="card-pokemon">
        <div className="container-image">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
        </div>
        <div className="card-info">
          <h2 className="name-pokemon">Bubasaur</h2>
          <div className="pokemon-type">
            <div className="type-fire">Fire</div>
            <div className="type-fire"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
