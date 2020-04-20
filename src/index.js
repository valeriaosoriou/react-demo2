import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';


ReactDOM.render(
  <div className="container">
    <div className="header">
      <h1 className="h1"> React Demo Site</h1>
      <div className="buttons">
        <Nav/>
      </div>
    </div>
    <Home/>
    <About/>
  </div>,
  document.getElementById('root'));