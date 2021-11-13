import { createTheme} from '@material-ui/core';
import { lightBlue, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: lightBlue,
    secondary: yellow,
  }
})

export default theme