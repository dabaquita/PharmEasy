import * as React from "react";
import {AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography, useMediaQuery} from "@mui/material";
import theme from "../theme";
import Logo from "./Logo";
import PharmEasyLogo from "../images/PharmEasyLogo.svg";
import { styled } from "@mui/system";

const handleProfileMenuOpen = () => {};
const handleProfileMenuClose = () => {};
const handleMenuClose = () => {};
const handleMenuOpen = () => {};

const Navigation = ({ state, onClick }) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("App is in mobile rendering mode:" + isMobile);

  const ImageContainer = styled("div", {
    name: "ImageContainer",
  })({
    height: "5%",
    width: "5%",
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar>
          <ImageContainer>
            <img src={PharmEasyLogo} />
          </ImageContainer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PharmEasy
          </Typography>

          <IconButton aria-label="Example">

          </IconButton>

          {state ? (
            <>
              <Button variant="contained" color="secondary" 
              onClick={onClick}
              disableElevation={true}>
                Create User
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="secondary" onClick={onClick} disableElevation={true}>
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar> </Toolbar>
    </Box>
  );
};

export default Navigation;
