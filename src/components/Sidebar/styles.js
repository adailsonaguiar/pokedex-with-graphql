import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  Toolbar: {
    height: 80,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ContainerSpace: {
    flex: 1,
  },
  pokebola: {
    marginLeft: theme.spacing(1),
    width: 65,
  },

  searchBar: {
    padding: '2px 4px',
    display: 'flex',
    width: 450,
    borderRadius: 5,
    height: 45,
    '@media (max-width: 600px)': {
      width: '70%',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 18,
  },
}));
