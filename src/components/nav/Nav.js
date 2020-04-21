import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import Home from '../home/Home';
import About from '../about/About';
import Products from '../products/Products'

class Nav extends React.Component{


  home = ()=>{
    console.log('Home');
    const homeSection = (
      <div className="container">
        <div className="header">
          <h1 className="h1">S U R F B O A R D S.  N Z</h1>
          <div className="buttons">
            <Nav/>
          </div>
        </div>
        <Home/>
      </div>
    )

    ReactDOM.render(homeSection,document.getElementById('root'));
  }
 about = ()=>{
    console.log('About');
    const aboutSection = (
      <div className="container">
        <div className="header">
        <h1 className="h1">S U R F B O A R D S.  N Z</h1>
          <div className="buttons">
            <Nav/>
          </div>
        </div>
        <About/>
      </div>
    )
    ReactDOM.render(aboutSection,document.getElementById('root'));
  }
  products = ()=>{
    console.log('ProductCard');
    const productsSection = (
      <div className="container">
        <div className="header">
        <h1 className="h1">S U R F B O A R D S.  N Z</h1>
          <div className="buttons">
            <Nav/>
          </div>
        </div>
        <Products/>
      </div>
    )
    ReactDOM.render(productsSection,document.getElementById('root'));
  }

  render(){
    return(
      <div>
        {/* Nav buttons*/}
        <button className="home" onClick={this.home}> Home</button>
        <button className="about" onClick={this.about}> About</button>
        <button className="about" onClick={this.products}> Products</button>
      </div>
    )
  }
}

export default Nav;