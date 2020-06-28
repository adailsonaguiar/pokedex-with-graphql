import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon } from '../../store/pokemons/actions';

export default () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons.text);

  useEffect(() => {
    dispatch(addPokemon('Esse outro'));
    document.body.innerHTML = `<h1>${pokemon}</h1>`;
  });
  return <div>Estou no início</div>;
};
