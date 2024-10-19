import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from 'react';

export const MuiTextField = () => {

  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant='outlined' />
        <TextField label="Name" variant='filled' />
        <TextField label="Name" variant='standard' />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" variant='outlined' size='small' color='secondary' />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          value={value}
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : "Don't share password with anyone"}
        />
        <TextField label="Form Input" required />
        <TextField label="Form Input" helperText="Don't share password with anyone" type='password' />
        <TextField label="Disabled Input" disabled />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction='row' >
        <TextField label='Amount' InputProps={{
          startAdornment: <InputAdornment position='start'>$</InputAdornment>,
        }} />
        <TextField type="number" label='weight' InputProps={{
          endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
        }} />
      </Stack>
    </Stack>
  )
};
