import { Component } from 'react'
import Header from "./Header"
import {lincs} from "../servise/linkFotos"
export default class Fotos extends Component {
   render() {
      return (
         <div className='page-fotos'>
            <Header /> 
            {lincs.map(el => <img src={el } className="fotos"/>)}
         </div>
      )
   }
}
