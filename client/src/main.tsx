import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Make sure you have installed @types/react-dom
import { App } from './App'; // Assuming App.tsx is in the same folder
import './bootstrap.min.css';
import './index.css';

// Get the root element and ensure it is non-nullable using TypeScript's non-null assertion (!)
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);