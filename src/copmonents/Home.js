import { Component } from 'react'
import Header from "./Header"
export default class Home extends Component {
   render() {
      return (
         <div className='home'>
            <Header />
            <p>
               Головна сторінка сайту — це як обкладинка для книги: привертає<br></br>
               увагу та викликає бажання гортати далі. Від того, як вона оформлена, <br></br>
               наскільки просто користувачеві орієнтуватися, чи є необхідна інформація<br></br>
               — від цього залежить, чи залишиться клієнт насайті або піде.<br></br>
               Всі ресурси індивідуальні, але існують загальні принципи того, як повинна<br></br>
               виглядати головнасторінка сайту. У цій статті розберемо, чому домашня сторінка<br></br>
               так важлива, як її оформити, що має там бути.
            </p>
         </div>
      )
   }
}
