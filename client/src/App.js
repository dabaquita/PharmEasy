import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#97d8e8',
    },
    secondary: {
      main: '#fdb614',
    } 
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Container component="main" maxWidth="xs">
          <Routes>
            <Route path="/" exact element={AuthPage()}/>
          </Routes>
      </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
