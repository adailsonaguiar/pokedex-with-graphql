import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { outerTheme } from './styles/ThemeProvider';
import combineReducers from './store/index';
import Sidebar from './components/Sidebar';

import Routes from './routes';
export default () => {
  return (
    <Provider store={createStore(combineReducers, applyMiddleware(ReduxThunk))}>
      <Router>
        <ThemeProvider theme={outerTheme}>
          <Sidebar />
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};
