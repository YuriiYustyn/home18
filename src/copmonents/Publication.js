import { Component } from 'react'
import Header from "./Header"
import AllPosts from "../servise/infoOfPosts"
export default class Publication extends Component {
   render() {
      return (
         <div>
            <Header /> 
            <AllPosts/> 
         </div>
      )
   }
}
