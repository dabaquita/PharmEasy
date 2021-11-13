import { Grid, Container, Box } from '@mui/material';
import './App.css';
import FirstNameTextField from './components/FirstNameTextField';
import LastNameTextField from './components/LastNameTextField';
import EmailTextField from './components/EmailTextField';
import PasswordTextField from './components/PasswordTextField';
import SignInButton from './components/SignInButton';
import SignUpButton from './components/SignUpButton';


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
