import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import TodoComponent from './TodoComponent';
import './css/index.css'

const App = () => {
    return ( 
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<TodoComponent />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<TodoComponent />} />
            </Routes>
        </div>
    </Router>
     );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
