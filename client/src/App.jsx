import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import "./App.css";
import { Navbar } from '@components';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

