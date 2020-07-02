import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import combineReducers from './store/index';
import Sidebar from './components/Sidebar';
import './styles/custom.css';

import Routes from './routes';
export default () => {
  return (
    <Provider
      store={createStore(combineReducers, applyMiddleware(ReduxThunk))}
      basename="/pokedex-with-graphql/"
    >
      <Router>
        <Sidebar />
        <div className="container-body">
          <Routes />
        </div>
      </Router>
    </Provider>
  );
};
