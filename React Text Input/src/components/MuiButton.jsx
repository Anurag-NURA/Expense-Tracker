import React from 'react';
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant='text' href="https://www.google.com">Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
      </Stack>

      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation disableTouchRipple
        >Send</Button>
        <IconButton color='success' aria-label='send'><SendIcon /></IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant='text' orientation='vertical' size='medium' color='error' aria-label='alignment button group'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>

      <Stack diresction='row'>
        <ToggleButtonGroup color='primary' size='small' value='left' exclusive>
          <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
          <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
          <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack >
  )
};
