import React from "react";
import logoImg from "../../assets/images/logo.png" 
import  './styles.css';

export class Navbar extends React.Component {
    render () {
        return (
            <header>
        <nav id="nav-bar">
          <div className= "nav-brand">
            <a href="/">
            <img src={logoImg} alt="Logo"  />
            <h1>Space Flight News</h1>
            </a>
          </div>

          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Trending</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
        </nav>
      </header>
        )
    }
}