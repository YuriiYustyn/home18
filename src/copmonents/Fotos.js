import { Component } from 'react'
import {lincs} from "../servise/linkFotos"
export default class Fotos extends Component {
   render() {
      return (
         <div className='page-fotos'>
            {lincs.map(el => <img src={el } className="fotos"/>)}
         </div>
      )
   }
}
