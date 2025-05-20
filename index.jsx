import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return <div className="blue-text">Hello React</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);