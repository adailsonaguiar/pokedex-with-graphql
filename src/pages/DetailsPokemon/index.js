import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GraphQLClient } from 'graphql-request';
import { endpoint } from '../../appsettings';

import './styles.css';

export default () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    console.log(id);
    getPokemons();
  }, [id]);
  async function getPokemons() {
    const query = `{
        pokemon(id: "${id}") {
          id
          name
          image
          types
          evolutions {
            id
            image
            name
          }
        }
    }`;

    const graphQLClient = new GraphQLClient(endpoint);
    const data = await graphQLClient.request(query);
    setPokemon(data.pokemon);
  }
  return (
    <div>
      <div className="card-pokemon-details">
        {pokemon && (
          <>
            <div className="container-image">
              <img src={pokemon.image} />
            </div>
            <div className="card-info">
              <h2 className="name-pokemon">{pokemon.name}</h2>
              <div className="pokemon-type">
                <div className="type-fire">Fire</div>
                <div className="type-fire"></div>
              </div>
              <h2 className="name-pokemon">Abilities</h2>
              <div className="pokemon-type">
                <div className="ability">Overgrow</div>
              </div>
              <h2 className="name-pokemon">Evolutions</h2>
              <div className="evolutions">
                {pokemon.evolutions &&
                  pokemon.evolutions.map((pokemon) => (
                    <Link
                      to={`/details/${pokemon.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="evolution-card">
                        <img src={pokemon.image} />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
