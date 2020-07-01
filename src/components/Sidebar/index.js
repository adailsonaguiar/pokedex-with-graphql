import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../store/pokemons/actions';
import './styles.css';
import pokebola from '../../assets/pokebola.svg';

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('');

  function handlerSearch(e) {
    e.preventDefault();
    if (pokemonName.length > 3) {
      dispatch(searchPokemon(pokemonName));
      history.push('/');
    }
  }

  function handlerClearForm(e) {
    e.preventDefault();
    setPokemonName('');
    dispatch(searchPokemon(''));
  }

  return (
    <header>
      <div className="container-space">
        <Link to="/">
          <img src={pokebola} className="pokebola" />
        </Link>
      </div>
      <section className="search-bar">
        <form onSubmit={handlerSearch}>
          <input
            autoFocus
            type="text"
            placeholder="Digite o nome de um super pokémon..."
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </form>
        {pokemonName.length > 0 && (
          <button className="close-icon" onClick={handlerClearForm}>
            x
          </button>
        )}
      </section>
      <div className="container-space" />
    </header>
  );
};

export default Sidebar;
