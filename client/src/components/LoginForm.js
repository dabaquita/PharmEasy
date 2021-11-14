import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

const LoginForm = ({ switchForms }) => {
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
      <FormHeading>Login</FormHeading>
        <div>
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Username"
            defaultValue="Username"
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
            width: "auto",
            postion: "absolute",
          }}
        >
          <ButtonWrapper>
            <SubmitButton
              variant="contained"
              style={{ backgroundColor: "#97d8e8", color: "#FFFFFF" }}
              disabled={true}
              disableElevation={true}
              onClick={switchForms}
              >
              Sign Up
            </SubmitButton>
            <SubmitButton
              variant="contained"
              style={{ backgroundColor: "#219ebc", color: "#FFFFFF" }}
              elevation={0}
              disableElevation={true}
              // onClick={} please log in
            >
              Sign In
            </SubmitButton>
          </ButtonWrapper>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default LoginForm;
