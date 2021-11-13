import React from 'react';
import TextField from '@mui/material/TextField';

const PasswordTextField = () => {
    return (
        <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
    );
}

export default PasswordTextField