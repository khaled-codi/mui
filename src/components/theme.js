import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Almarai'
  },
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff"
    },
    secondary: {
      main: "#333",
      contrastText: "#fff"
    },
    // background: {
    //   default: "#F2F2F2"
    // },
    text: {
      primary: "#000"
    }
  }
})