import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetails } from '../../store/pokemons/actions';
import Load from '../../components/Load';
import { getTypeEspecifications } from '../../utils/functions';

import './styles.css';

export default () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const pokemon = useSelector((state) => state.pokemons.pokemon);
  const loading = useSelector((state) => state.pokemons.loading);

  useEffect(() => {
    dispatch(getPokemonDetails(name));
  }, [name]);

  return (
    <div>
      {loading ? (
        <Load />
      ) : (
        <div className="card-pokemon-details">
          {pokemon && (
            <>
              <div className="container-image">
                <img src={pokemon.image} />
              </div>
              <div className="card-info">
                <h2 className="name-pokemon">{pokemon.name}</h2>
                <div className="pokemon-type">
                  {pokemon.types.map((type, index) => (
                    <div
                      key={index}
                      className="type-badge"
                      style={{
                        backgroundColor: getTypeEspecifications(type)
                          .background,
                      }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
                <h2 className="name-pokemon">Atacks</h2>
                <section>
                  {pokemon.attacks.fast && (
                    <>
                      <h4>Fast</h4>
                      <div className="pokemon-attacks">
                        {pokemon.attacks.fast.map((atack) => (
                          <>
                            <div className="ability">
                              <h5>{atack.name}</h5>
                              <p>Damage: {atack.damage}</p>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                  {pokemon.attacks.special && (
                    <>
                      <h4>Special</h4>
                      <div className="pokemon-attacks">
                        {pokemon.attacks.special.map((atack) => (
                          <>
                            <div className="ability">
                              <h5>{atack.name}</h5>
                              <p>Damage: {atack.damage}</p>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                </section>
                {pokemon.evolutions && (
                  <>
                    <h2 className="name-pokemon">Evolutions</h2>
                    <div className="evolutions">
                      {pokemon.evolutions.map((pokemon) => (
                        <Link
                          key={pokemon.id}
                          to={`/details/${pokemon.name}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <div className="evolution-card">
                            <div className="teste">
                              <img src={pokemon.image} />
                            </div>
                            <div id="pokemon-name">
                              <h5 style={{ position: 'relative', bottom: 0 }}>
                                {pokemon.name}
                              </h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
