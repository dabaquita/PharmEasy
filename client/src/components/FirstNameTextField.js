import React from 'react';
import TextField from '@mui/material/TextField';

const FirstNameTextField = () => {
    return (
        <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
        />
    );
}

export default FirstNameTextField