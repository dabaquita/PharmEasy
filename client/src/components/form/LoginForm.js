import { Grid, Box } from "@mui/material";
import FirstNameTextField from "../FirstNameTextField";
import LastNameTextField from "../LastNameTextField";
import EmailTextField from "../EmailTextField";
import PasswordTextField from "../PasswordTextField";
import SignInButton from "../SignInButton";
import SignUpButton from "../SignUpButton";
import theme from "../../theme";
import { styled } from "@mui/system";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const StyledPaper = styled(Paper, {
  name: "LoginForm",
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

// const ButtonBox = styled(ButtonBox, {
//   name: "ButtonBox",
// })({

// })


const LoginForm = () => {
  // const classes = useStyles();

  return (
    
    <Box
    component="form"
    sx={{
      // "& .MuiTextField-root": { m: 1, width: "25ch" },
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
    noValidate
    autoComplete="off"
    >
      <StyledPaper>
        <div >
        <TextField
          required
          fullWidth 
          id="outlined-required"
          label="First Name"
          defaultValue="Enter your first name."
          margin="normal"
          color="primary"
          />
        <TextField
          required
          fullWidth 
          id="outlined-required"
          label="Last Name"
          defaultValue="Enter your last name"
          margin="normal"
          color="primary"
          />
        <TextField
          required
          fullWidth 
          id="outlined-required"
          label="Email"
          defaultValue="Email"
          margin="normal"
          color="primary"
          />
        <TextField
          required
          fullWidth 
          id="outlined-required"
          label="Password"
          defaultValue="Password"
          margin="normal"
          color="primary"
          />
        </div>

        <Box 
        component="div"
        sx={{
          // "& .MuiTextField-root": { m: 1, width: "25ch" },
          postion: "absolute",
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",}}
          >

        <SignInButton />
        <SignUpButton />

        </Box>
          </StyledPaper>
      </Box>
  );
};

export default LoginForm;
