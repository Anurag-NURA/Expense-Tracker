import React from 'react';

import "./App.css";
import { MuiButton, MuiTextField, MuiInputField } from '@components';

export const App = () => {
  return (
    <div className='App'>
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      <MuiInputField
        label='Name'
        variant='filled'
        type='password'
        disabled={false}
      />
    </div>
  )
};