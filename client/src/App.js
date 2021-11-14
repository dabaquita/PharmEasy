import { useState, useEffect, useRef } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { styled } from "@mui/system";
import lottie from "lottie-web";
import LottieAnimation from './animations/bg.json';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#EEF8F9",
    },
    primary: {
      main: "#97d8e8",
    },
    secondary: {
      main: "#fdb614",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#050E0F",
    },
    primary: {
      main: "#0F3843",
      text: {
        primary: "#",
      },
    },
    secondary: {
      main: "#CA8E02",
    },
  },
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

function App() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [light, setLight] = useState(false);

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./animations/bg.json')
    });
  }, []);

  const handleLoginClick = (e) => {
    console.log("Testing App");
    setToggleLogin(!toggleLogin);
    console.log("Toggled form rendering state: " + toggleLogin);
  };

  return (
    // <ThemeProvider theme={light ? themeLight : themeDark}>
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      {/* <Container component="main" maxWidth="xs"> */}
      <Background>
          {toggleLogin ? (
            <>
              <LoginPage state={toggleLogin} onClick={handleLoginClick} />
            </>
          ) : (
            <>
              <RegistrationPage
                state={toggleLogin}
                onClick={handleLoginClick}
              />
            </>
          )}
          <AnimationContainer className="container" ref={container}>
          </AnimationContainer>
      </Background>
      {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;
