import { Grid, Container, Box } from '@mui/material';
import './App.css';
import FirstNameTextField from './components/FirstNameTextField/FirstNameTextField';
import LastNameTextField from './components/LastNameTextField/LastNameTextField';
import EmailTextField from './components/EmailTextField/EmailTextField';
import PasswordTextField from './components/PasswordTextField/PasswordTextField';
import SignInButton from './components/SignInButton/SignInButton';
import SignUpButton from './components/SignUpButton/SignUpButton';
import ForgotPassword from './components/ForgotPasswordHyperlink/ForgotPasswordHyperlink';


function App() {
  return (
    <Container component="main" maxWidth="xs">
          <Box 
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center',
            }}
          >
            <Grid container spacing={2}>

              <Grid>
                <FirstNameTextField/>
              </Grid>
              <Grid>
                <LastNameTextField/>
              </Grid>

              <Grid>
                <EmailTextField/>
                <PasswordTextField/>
                <ForgotPassword/>
              </Grid>

              <Grid>
                <SignInButton/>
              </Grid>
              <Grid>
                <SignUpButton/>
              </Grid>



            </Grid>
          </Box>
    </Container>

  );
}

export default App;
