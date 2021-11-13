import React from 'react';
import { TextField } from '@mui/material';

const LastNameTextField = () => {
    return (
        <TextField
            autoComplete="given-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            autoFocus
        />
    );
}

export default LastNameTextField