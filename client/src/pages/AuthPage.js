import { Container } from "@mui/material";
import Navigation from "../components/Navigation.js";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import { useState } from "react";

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

const AuthPage = () => {
  const [toggleLogin, setToggleLogin] = useState(false);

  const handleLoginClick = (e) => {
    console.log("Testing App")
    setToggleLogin(!toggleLogin)
    console.log("Toggled form rendering state: " + toggleLogin)
  };

  return (
    <Container component="main" maxWidth="xs">
      <Navigation onClick={handleLoginClick} />
      { toggleLogin ? <LoginForm onSubmit={handleLoginClick} /> : <RegistrationForm onSubmit={handleLoginClick} /> }
    </Container>
  );
};

export default AuthPage;
