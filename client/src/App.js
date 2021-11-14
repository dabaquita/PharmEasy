import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import PharmacyHomePage from './pages/PharmacyHomePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material"; 
import Navigation from "./components/Navigation";
import { useState } from 'react';

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

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Router>
          <Routes>
            <Route path="/" exact element={AuthPage()}/>
            <Route path="/home" exact element={PharmacyHomePage()}/>
          </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
