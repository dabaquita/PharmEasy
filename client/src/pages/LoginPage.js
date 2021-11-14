import { Button, Container } from "@mui/material";
import Navigation from "../components/Navigation.js";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper, {
  name: "StyledPaper",
  slot: "Wrapper",
})({
  color: "#6B8068",
  backgroundColor: "white",
  margin: "auto",
  marginTop: 100,
  borderRadius: 2,
  height: 300,
  weight: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".MuiButton-root": { color: "#FF0000" },
});

function LoginPage({ state, onClick }) {
  return (
    <Container component="main" maxWidth="xs">
      <Navigation state={state} onClick={onClick} />
      <LoginForm />
    </Container>
  );
}

export default LoginPage;
