import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listPokemons } from '../../store/pokemons/actions';
import './styles.css';
import Load from '../../components/Load';
import { getTypeEspecifications } from '../../utils/functions';

export default () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.list);
  const loading = useSelector((state) => state.pokemons.loading);

  useEffect(() => {
    if (pokemons.length == 0) dispatch(listPokemons());
  }, []);

  function PokemonCard({ name, image, id, types }) {
    return (
      <Link to={`/details/${name}`} style={{ textDecoration: 'none' }}>
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
        <Load />
      ) : (
        <div className="container-list">
          {pokemons &&
            pokemons.map((pokemon) => (
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
