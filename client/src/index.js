import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// const Rooter = () =>  <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(
  
  <BrowserRouter>
   <App />
   </BrowserRouter>,
  document.getElementById('root')
);

