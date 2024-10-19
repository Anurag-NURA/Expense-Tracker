import React, { useState } from 'react'
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material"

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const MuiInputField = ({
  label,
  variant = "standard",
  type = "text",
  disabled = false,
  readOnly = false,
  adornmentPosition = "start",
  currency
}) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Stack direction="row" spacing={4}>
      <TextField
        label={label}
        variant={variant}
        type={type === 'password' && showPassword ? 'text' : type}
        disabled={disabled}
        InputProps={{
          ...(readOnly && { readOnly: true }),
          ...(currency && { [adornmentPosition + 'Adornment']: (<InputAdornment position={adornmentPosition}>{currency}</InputAdornment>) }),
          ...(type === 'password' && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          })
        }}
      />
    </Stack >
  )
}
