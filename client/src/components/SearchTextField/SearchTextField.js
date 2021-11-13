import React from 'react'
import TextField from '@mui/material/TextField'

const SearchTextField = () => {
    return (
        <TextField
              margin="normal"
              required
              fullWidth
              id="search"
              label="Name/DOB/Rx Number"
              name="search"
              autoFocus
            />
    );
}

export default SearchTextField