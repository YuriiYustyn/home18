import { Component } from 'react'
import { Contacts, contacts, } from '../servise/Contacts'
export default class ContactPage extends Component {
   render() {
      return (
         <div>
            <Contacts />
         </div>
      )
   }
}
