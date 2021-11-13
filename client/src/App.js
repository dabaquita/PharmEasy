import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';

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

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <LoginPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
