import React from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppTitle } from 'components/AppTitle'
import { RootState } from 'reducer'
import { increment, reset } from 'actions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div className={classes.root}>
      <Head>
        <title>Template Next TypeScript Jest</title>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <main>
        <AppTitle>This is the Home page</AppTitle>
        <span>{`Count: ${count}`}</span>
        <Button onClick={() => dispatch(increment(1))}>Increment</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
      </main>
    </div>
  )
}

export default Home
