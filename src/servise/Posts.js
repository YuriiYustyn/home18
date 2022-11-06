import React from "react";

import { Like, Coment, Repost } from './ActionPanel.js'
export const Post = ({ name, fotoAuthor, nickname, content, fotoContent }) => {
   return (
      <div className='divAuthor'>
         <img className='authorFoto' src={fotoAuthor} alt='foto' />
         <span className='authorName'>{name}</span>
         <i className='nickName'>{nickname}</i>
         <span className="spanDate">{new Date().toUTCString()}</span>
         <p className='content'>{content}</p>
         <img className='postFoto' src={fotoContent} alt='foto' />
         <div className="panel">
            <span>{getRandomInt(500)}{Coment()}</span>
            <span>{getRandomInt(500)}{Like()}</span>
            <span>{getRandomInt(100)}{Repost()}</span>
         </div>
      </div>)
}
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
