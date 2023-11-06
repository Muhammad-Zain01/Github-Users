import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GitUserContextProvider } from './context/GithubUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GitUserContextProvider>
      <App />
    </GitUserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
