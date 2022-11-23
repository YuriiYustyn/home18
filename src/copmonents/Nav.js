import { HashRouter, NavLink } from "react-router-dom";
import React, { Component } from "react";
export default class Nav extends Component {
   render() {
      return (
         <HashRouter>
         <div className='nav'>
            <button><li><NavLink to={'/'}>Home </NavLink></li></button>
            <button><li><NavLink to={'/fotos'}>Fotos </NavLink></li></button>
            <button><li><NavLink to={"/publication"}>Publication </NavLink></li></button>
            <button> <li><NavLink to={"/contactsPage"}>Contacts </NavLink></li ></button>
         </div>
         </HashRouter >
      )
   }
}