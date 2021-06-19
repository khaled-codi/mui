import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './components/theme';
import Header from './components/header';
import Home from './pages/Home';

const useStyles = makeStyles(theme => ({
  '@global': {
    a: {
      color: 'unset',
      textDecoration: 'none'
    }
  }
}))

export default function App() {
  useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      <Home />

    </ThemeProvider>
  );
}