import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import PharmacyHomePage from './pages/PharmacyHomePage';

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
          <Routes>
            <Route path="/" exact element={AuthPage()}/>
            <Route path="/home" exact element={PharmacyHomePage()}/>
          </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
