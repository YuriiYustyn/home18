import { Component } from 'react'
import { Contacts, contacts, } from '../servise/Contacts'
export default class ContactPage extends Component {

   render() {
      let idd = this.props.match.params.id
      const { foto, firstName, lastName, phone, gender } = contacts[idd]
      return (
         <div>
            <div className="OneContact">
               <img className='OneContact-foto' src={foto } />
               <span className="OneContact-firstMame">{firstName + " "}</span>
               <span className="OneContact-lastName">{lastName}</span>
               <span className="OneContact-phone">{phone}</span>
               <div className="OneContact-gender">{gender}</div>
               <button className="OneContact-button" onClick={() =>this.props.history.goBack()}>Back</button>
            </div>
         </div>
      )
   }
}