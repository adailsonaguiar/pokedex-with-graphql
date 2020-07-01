import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listPokemons } from '../../store/pokemons/actions';
import './styles.css';
import pokebola from '../../assets/load.svg';

export default () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.list);
  const loading = useSelector((state) => state.pokemons.loading);

  useEffect(() => {
    if (pokemons.length == 0) dispatch(listPokemons());
  }, []);

  function getTypeEspecifications(type) {
    const TYPE_PATERN = type.toUpperCase();
    const especifications = { color: '#fff' };
    switch (TYPE_PATERN) {
      case 'POISON':
        especifications.background = '#682A68';
        break;
      case 'GRASS':
        especifications.background = '#7DB808';
        break;
      case 'FIRE':
        especifications.background = '#E24242';
        break;
      case 'WATER':
        especifications.background = '#5BC7E5';
        break;
      case 'BUG':
        especifications.background = '#A8B820';
        break;
      case 'FLYING':
        especifications.background = '#A890F0';
        break;
      case 'NORMAL':
        especifications.background = '#A8A878';
        break;
      case 'ELECTRIC':
        especifications.background = '#F8D030';
        break;
      case 'GROUND':
        especifications.background = '#E0C068';
        break;
      case 'FAIRY':
        especifications.background = '#E03A83';
        break;
      case 'FIGHTING':
        especifications.background = '#FF501F';
        break;
      case 'PSYCHIC':
        especifications.background = '#A65E9A';
        break;
      case 'ROCK':
        especifications.background = '#B8A038';
        break;
      case 'STEEL':
        especifications.background = '#B8B8D0';
        break;
      case 'ICE':
        especifications.background = '#98D8D8';
        break;
      case 'GHOST':
        especifications.background = '#705898';
        break;

      default:
        especifications.background = '#A8A878';
        break;
    }
    return especifications;
  }

  function PokemonCard({ name, image, id, types }) {
    return (
      <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
        <div className="card-pokemon">
          <div className="container-image">
            <img src={image} />
          </div>
          <div className="card-info">
            <h2 className="name-pokemon">{name}</h2>
            <div className="pokemon-type">
              {types.map((type, index) => (
                <div
                  key={index}
                  className="type-badge"
                  style={{
                    backgroundColor: getTypeEspecifications(type).background,
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <>
      {loading ? (
        <img className="load-spinner" src={pokebola} />
      ) : (
        <div className="container-list">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              id={pokemon.id}
              types={pokemon.types}
            />
          ))}
        </div>
      )}
    </>
  );
};
