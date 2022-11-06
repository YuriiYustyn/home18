import { Component } from 'react'
import Header from "./Header"
import { Contacts, contacts, } from '../servise/Contacts'
export default class ContactPage extends Component {

   render() {
      let idd = this.props.match.params.id
      return (
         <div>
            <Header />
            <div className="OneContact">
               <img className='OneContact-foto' src={contacts[idd].foto } />
               <span className="OneContact-firstMame">{contacts[idd].firstName + " "}</span>
               <span className="OneContact-lastName">{contacts[idd].lastName}</span>
               <span className="OneContact-phone">{contacts[idd].phone}</span>
               <div className="OneContact-gender">{contacts[idd].gender}</div>
               <button className="OneContact-button" onClick={() =>this.props.history.goBack()}>Back</button>
            </div>
         </div>
      )
   }
}