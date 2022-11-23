import React from "react";
import { Link } from "react-router-dom";

export const Contact = (el) => {
  const{firstName, lastName, phone, gender, id}=el
   return (
      <div className="contact">
         <div> <span>{firstName + " "}</span>
            <span>{lastName}</span>
         </div>
         <span>{phone}</span>
         <div >{gender}</div>
         <button className="button-user"><Link to={`/contactPage/${id}`}>info</Link></button>
      </div>
   )
}