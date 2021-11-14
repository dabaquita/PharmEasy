import { useState } from 'react';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

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


function App() {
  const [toggleLogin, setToggleLogin] = useState(false)

  const handleLoginClick = (e) => {
    console.log("Testing App")
    setToggleLogin(!toggleLogin)
    console.log("Toggled form rendering state: " + toggleLogin)
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {toggleLogin ? <> <LoginPage state={toggleLogin} onClick={handleLoginClick}/> </> : <> <RegistrationPage state={toggleLogin} onClick={handleLoginClick}/></>
        }

      </Container>
    </ThemeProvider>
  );
}

export default App;
