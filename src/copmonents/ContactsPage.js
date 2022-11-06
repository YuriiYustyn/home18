import { Component } from 'react'
import Header from "./Header"
import { Contacts, contacts, } from '../servise/Contacts'
export default class ContactPage extends Component {
   render() {
      const baseUrl = this.props.locations
      return (
         <div>
            <Header />
            <Contacts />
         </div>
      )
   }
}
