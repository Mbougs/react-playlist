import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoComponent  from './TodoComponent';
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <TodoComponent />
  // </React.StrictMode>
);
