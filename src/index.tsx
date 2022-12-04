import React from 'react';
import { createRoot } from 'react-dom/client';
import ToggleColorMode from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>
);
