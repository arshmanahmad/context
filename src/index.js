import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import bookDemo from './context/bookShow';
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <bookDemo.Provider value={"Context is shown."}>
    <App />
  </bookDemo.Provider>
);