<<<<<<< HEAD
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
=======
import { Grid, Container, Box } from '@mui/material';
import './App.css';
import FirstNameTextField from './components/FirstNameTextField/FirstNameTextField';
import LastNameTextField from './components/LastNameTextField/LastNameTextField';
import EmailTextField from './components/EmailTextField/EmailTextField';
import PasswordTextField from './components/PasswordTextField/PasswordTextField';
import SignInButton from './components/SignInButton/SignInButton';
import SignUpButton from './components/SignUpButton/SignUpButton';
import ForgotPassword from './components/ForgotPasswordHyperlink/ForgotPasswordHyperlink';
import BasicInfoCard from './components/BasicInfoCard/BasicInfoCard';
import InsuranceInfoCard from './components/InsuranceInfoCard/InsuranceInfoCard';
import MedicationListGrid from './components/MedicationList/MedicationListGrid';


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
                <BasicInfoCard/> <br />
                <InsuranceInfoCard/> <br />

                <MedicationListGrid />

              </Grid>




            </Grid>

          </Box>

    </Container>
>>>>>>> master

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <LoginPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
