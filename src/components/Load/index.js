import React from 'react';
import pokebola from '../../assets/load.svg';
import './styles.css';

export default () => (
  <div className="container-load">
    <img className="load-spinner" src={pokebola} />
  </div>
);
