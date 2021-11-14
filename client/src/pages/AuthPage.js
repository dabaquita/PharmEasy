import { Container } from "@mui/material";
import Navigation from "../components/Navigation.js";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import { useState } from "react";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

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

const Background = styled("div", {
  name: "Background",
  slot: "Wrapper",
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  zIndex: -2,
  margin: "auto",
  padding: 0,
  // backgroundColor: "purple"
});

const AnimationContainer = styled("div", {
  name: "AnimationContainer",
  slot: "Wrapper",
})({
  bottom: 0,
  left: 0,
  right: 0,
  margin: "0",
  width: "100%",
  // backgroundColor: "purple"
});


const AuthPage = () => {
  //const [light, setLight] = useState(false);
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../animations/bg.json')
    });
  }, []);

  const [toggleLogin, setToggleLogin] = useState(false);

  const handleLoginClick = (e) => {
    console.log("Testing App")
    setToggleLogin(!toggleLogin)
    console.log("Toggled form rendering state: " + toggleLogin)
  };

  return (
    <Background>
      <Navigation state={toggleLogin} onClick={handleLoginClick} isUserLoggedIn={false}/>
      { toggleLogin ? <LoginForm onClick={handleLoginClick}/> : <RegistrationForm  onClick={handleLoginClick}/> }
      <AnimationContainer className="container" ref={container} />
    </Background>
  );
};

export default AuthPage;

