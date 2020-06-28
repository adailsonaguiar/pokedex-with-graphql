import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

import { useStyles } from './styles';
import pokebola from '../../assets/pokebola.svg';

const Sidebar = () => {
  const styles = useStyles();

  return (
    <AppBar color="primary" position="static">
      <Toolbar variant="dense" className={styles.Toolbar}>
        <div className={styles.ContainerSpace}>
          <div className={styles.alignRow}>
            <img src={pokebola} className={styles.pokebola} />
          </div>
        </div>
        <Paper
          elevation={3}
          component="form"
          //   onSubmit={handleSubmmitSearch}
          className={styles.searchBar}
        >
          <InputBase
            className={styles.input}
            autoFocus
            placeholder="Digite o nome de um super pokémon..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton
            type="submit"
            className={styles.iconButton}
            aria-label="search"
          >
            {/* <SearchIcon /> */}
          </IconButton>
        </Paper>
        <div className={styles.ContainerSpace} />
      </Toolbar>
    </AppBar>
  );
};

export default Sidebar;
