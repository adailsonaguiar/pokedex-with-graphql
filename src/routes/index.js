import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPokemon, DetailsPokemon } from '../pages';
export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <ListPokemon />
      </Route>
      <Route path="/details/:id">
        <DetailsPokemon />
      </Route>
    </Switch>
  );
};
