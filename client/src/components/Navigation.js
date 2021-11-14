import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import theme from "../theme";
import CssBaseline from '@mui/material/CssBaseline';


const handleProfileMenuOpen = () => {};
const handleProfileMenuClose = () => {};
const handleMenuClose = () => {};
const handleMenuOpen = () => {};

const useStyles = () =>
  makeStyles({
    logo: {
      fontColor: "black",
    },
    appbar: {
      position: 'relative',
    },
    title: {
      flexGrow: 1,
    },
  });

const Navigation = ({ state, onClick }) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  console.log("App is in mobile rendering mode:" + isMobile);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCreateUserClick = (e) => {
    setAnchorEl(null);
    console.log("Create User option clicked.")
  };

  const handleMenuClick = (e) => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PharmEasy
          </Typography>

          {/* <Button variant='contained' color='secondary' disableElevation>Login</Button> */}

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClick}
              >
                <MenuItem onClick={handleCreateUserClick}>Create User</MenuItem>
                <MenuItem onClick={onClick}>Login</MenuItem>

              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar> </Toolbar>
    </Box>
  );
};

export default Navigation;
