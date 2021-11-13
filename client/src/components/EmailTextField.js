import React from 'react';
import { TextField } from '@mui/material';

const EmailTextField = () => {
    return (
        <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
    );
}

export default EmailTextField