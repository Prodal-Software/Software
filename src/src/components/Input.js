import React from 'react';
import { TextField, FormHelperText } from '@mui/material';

function Input(props) {
  const { label, type, value, onChange, color, size, helperText} = props;

  return (
    <TextField
      // fullWidth
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      margin="normal"
      helperText={helperText}
      color={color}
      size={size}
    />
  );
}

export default Input;
