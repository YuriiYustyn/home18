import React, { useState } from "react";
import { Contact } from "./Contact.js"
import "./contacts.css"
export const contacts = [{
   firstName: "Барней",
   lastName: "Стинсовський",
   phone: "+380956319521",
   gender: "male",
   id: 0,
   foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5OyONzCdE1yJOvtpxTCe1gQ8DcFxQchR7w&usqp=CAU"

}, {
   firstName: "Робін",
   lastName: "Щербатська",
   phone: "+380931460123",
   gender: "female",
   id: 1,
   foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4bCIMagAjkr4VHJNnFzG54ULRgF958ZgLw&usqp=CAU"
}, {
   firstName: "Анонімний",
   lastName: "Анонімус",
   phone: "+380666666666",
   id: 2,
   foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZs0i2gN-lcm74BLaEyL-gzWxQnmwW0fl7Q&usqp=CAU"
}, {
   firstName: "Лілія",
   lastName: "Олдровна",
   phone: "+380504691254",
   gender: "female",
   id: 3,
   foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3piXv_Qr5CupXr8g99uuyTc_iLi_EGzipQ&usqp=CAU"
}, {
   firstName: "Маршен",
   lastName: "Еріксонян",
   phone: "+380739432123",
   gender: "male",
   id: 4,
   foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDRhEeRY31Tf4S7NU-S2lFH_SitKGWOGSDg&usqp=CAU"
}, {
   firstName: "Теодор",
   lastName: "Мотсбес",
   phone: "+380956319521",
   gender: "male",
   id: 5,
   foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcLQ1_7boy0_MU1zgg5YJKmie9r7hp5bXyw&usqp=CAU"
}];

export const Contacts = () => {
   let [state, renderState] = useState(contacts)
   const handleSearchChange = (e) => {
      state = contacts
      let filterState = state.filter(el => (`${el.firstName} ${el.lastName}`).toLowerCase().includes(String(e.target.value).toLowerCase()) || el.phone.includes(e.target.value))
      renderState(filterState)
   }
   return (
      <div>
         <input className="search" placeholder="пошук" onChange={(e) => handleSearchChange(e)} />
         {state.map((el, i) => <Contact key={i} {...el} />)}
      </div>
   )
}


