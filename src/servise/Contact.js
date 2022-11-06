import React from "react";
import { Link } from "react-router-dom";

export const Contact = (el) => {
   return (
      <div className="contact">
         <div> <span>{el.firstName + " "}</span>
            <span>{el.lastName}</span>
         </div>
         <span>{el.phone}</span>
         <div >{el.gender}</div>
         <button className="button-user"><Link to={`/contactPage/${el.id}`}>info</Link></button>
      </div>
   )
}