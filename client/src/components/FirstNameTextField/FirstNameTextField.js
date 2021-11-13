import React from 'react';
import TextField from '@mui/material/TextField';

const FirstNameTextField = () => {
    return (
        <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
        />
    );
}

export default FirstNameTextField