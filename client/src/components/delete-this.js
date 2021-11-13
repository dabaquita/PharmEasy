import { Grid, Box } from "@mui/material";
import FirstNameTextField from "./FirstNameTextField";
import LastNameTextField from "./LastNameTextField";
import EmailTextField from "./EmailTextField";
import PasswordTextField from "./PasswordTextField";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import theme from "../theme";


const useStyles = () =>
  makeStyles({
    toolbar: theme.mixins.toolbar,
  });

const LoginForm = () => {
  const classes = useStyles();

  return (
    <form className="form-container">
      <div className={classes.toolbar}/>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <FirstNameTextField />
          </Grid>

          <Grid>
            <LastNameTextField />
          </Grid>

          <Grid>
            <EmailTextField />
            <PasswordTextField />
          </Grid>

          <Grid>
            <SignInButton />
          </Grid>

          <Grid>
            <SignUpButton />
          </Grid>

        </Grid>
      </Box>
    </form>
  );
};

export default LoginForm;
