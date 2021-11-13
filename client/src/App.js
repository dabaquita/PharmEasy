import {Button, Container } from '@mui/material';
import './App.css';
import Navigation from './components/Navigation';
import LoginForm from './components/form/LoginForm';
import { useTheme, createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import { lightBlue, yellow } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#97d8e8',
    },
    secondary: {
      main: '#fdb614',
    } 
  },
})

// const useStyles = () =>
//   makeStyles({
//     logo: {
//       fontColor: "black",
//     },
//     appbar: {
//       position: 'relative',
//     },
//     button: {
//       fontSize: 36,
//       backgroundColor: "lightblue",
//       "&:hover": {
//         backgroundColor: "darkblue",
//       },
//     },
//     toolbar: theme.mixins.toolbar,
//   });

const StyledPaper = styled(Paper, {
  name: "StyledPaper",
  slot: "Wrapper",
})({
  color: '#6B8068',
  backgroundColor: "white",
  margin: "auto",
  marginTop: 100,
  borderRadius: 2,
  height: 300,
  weight: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".MuiButton-root" : { color: "#FF0000"}
});

const StyledPaper2 = styled(Paper, {})({});

function App() {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Navigation />
        {/* <StyledPaper> */}
          <LoginForm />
        {/* </StyledPaper> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
