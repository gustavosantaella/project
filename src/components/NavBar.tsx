import React, { Component } from 'react';
import '../css/style.css';
/*import $ from 'jquery';*/
import Typed from 'react-typed';
import { Link, animateScroll as scroll } from "react-scroll";

export default class NavBar extends Component {

   scroll = (id: any) =>{

   }

   render() {

    return (
      <>
      <header >
      <Link to="about"/>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <a className="navbar-brand" href="#">
      Gustavo Santaella

      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" >
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
      <a className="nav-link" href="#"> <i className="fas fa-home mr-1"></i>
      <Link 
      smooth={true}
      to='home'
      activeClass="active"
      >  Home
      </Link>
      </a>
      </li>
      <li className="nav-item">
      <a className="nav-link"  href="#"><i className='fas fa-user mr-1'> </i>
      <Link 
      smooth={true}
      to='about'
      duration={500}
      activeClass="active"
      >  
      About me
      </Link>
      </a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#"><i className='fas fa-book mr-1'> </i>
      <Link 
      smooth={true}
      to='skills'
      duration={500}
      >  
      Skills
      </Link>
      </a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#"><i className='fas fa-book mr-1'> </i>
      <Link 
      smooth={true}
      to='projects'
      activeClass="active"
      duration={500}
      >  Projects
      </Link>
      </a>
      </li>

      <li className="nav-item">
      <a className="nav-link" href="#"><i className='fas fa-phone mr-1'> </i>
      <Link 
      smooth={true}
      to='contact'
      activeClass="active"
      duration={500}
      >  Contact
      </Link>
      </a>
      </li>

      </ul>
      </div>
      </nav>

      </header>

      </>
      );
 }
}


