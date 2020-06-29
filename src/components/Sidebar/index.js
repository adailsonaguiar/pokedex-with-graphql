import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import pokebola from '../../assets/pokebola.svg';

const Sidebar = () => {
  return (
    <div className="toolbar">
      <div className="container-space">
        <Link to="/">
          <img src={pokebola} className="pokebola" />
        </Link>
      </div>
      <div
        component="form"
        //   onSubmit={handleSubmmitSearch}
        className="search-bar"
      >
        <input autoFocus placeholder="Digite o nome de um super pokémon..." />
      </div>
      <div className="container-space" />
    </div>
  );
};

export default Sidebar;
