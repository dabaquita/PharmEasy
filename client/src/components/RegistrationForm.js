import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { register } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
const StyledPaper = styled(Paper, {
  name: "LoginForm",
  slot: "Wrapper",
})({
  color: "#6B8068",
  backgroundColor: "white",
  margin: "auto",
  marginTop: 20,
  marginBottom: 50,
  padding: 20,
  borderRadius: 2,
  weight: 300,
  display: "flex-column",
  alignItems: "center",
  justifyContent: "center",
  ".MuiButton-root": { color: "#FF0000" },
});

const ButtonWrapper = styled("div", {
  name: "ButtonWrapper",
})({
  marginLeft: "15%",
  display: "flex-row",
  flexDirection: "row",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
});

const SubmitButton = styled(Button, {
  name: "SubmitButton",
})({
  display: "flex-row",
  position: "relative",
  margin: 10,
  marginLeft: 15,
  padding: 10,
  alignItems: "center",
  justifyContent: "center",
});

const FormHeading = styled(Typography, {
  name: "Form Heading",
})({
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
})

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const RegistrationForm = ({ switchForm }) => {
  const [form, setForm] = useState(initialState);
  const [isRegister, setIsRegister] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      console.log(form);
      dispatch(register(form, navigate));
    }
    else {
      // we want to switch to the login page
    }
  };

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
        <FormHeading>Register</FormHeading>
        <div>
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="First Name"
            margin="normal"
            color="primary"
            name="firstName"
            onChange={(e) => handleFormChange(e)}
          />
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Last Name"
            margin="normal"
            color="primary"
            name="lastName"
            onChange={(e) => handleFormChange(e)}
          />
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Email"
            margin="normal"
            color="primary"
            name="email"
            onChange={(e) => handleFormChange(e)}
          />
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Password"
            margin="normal"
            color="primary"
            type="password"
            name="password"
            onChange={(e) => handleFormChange(e)}
          />
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Confirm Password"
            margin="normal"
            color="primary"
            type="password"
            name="confirmPassword"
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <Box
          component="div"
          sx={{
            // "& .MuiTextField-root": { m: 1, width: "25ch" },
            width: "auto",
            postion: "absolute",
          }}
        >
          <ButtonWrapper>
            <SubmitButton
              variant="contained"
              style={{ backgroundColor: "#219ebc", color: "#FFFFFF" }}
              disableElevation={true}
              onClick={handleSubmit}
            >
              Sign Up
            </SubmitButton>
            <SubmitButton
              variant="contained"
              style={{ backgroundColor: "#97d8e8", color: "#FFFFFF" }}
              disableElevation={true}
              onClick={switchForm}
            >
              Sign In
            </SubmitButton>
          </ButtonWrapper>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default RegistrationForm;
