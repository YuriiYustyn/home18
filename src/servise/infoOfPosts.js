import './Posts.css';
import { Post } from './Posts.js'


export let obj = [{
   name: "Jeni",
   fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZs0i2gN-lcm74BLaEyL-gzWxQnmwW0fl7Q&usqp=CAU',
   nickname: '@bin',
   content: "Клятий вилупку",
   fotoContent: 'https://data-vyhoda.ru/wp-content/uploads/2019/02/Povorot-ne-tuda-7-data-vyhoda.jpg'
},
{
   name: "Ivan",
   fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5OyONzCdE1yJOvtpxTCe1gQ8DcFxQchR7w&usqp=CAU',
   nickname: '@ill',
   content: "Хороша дівчинка)))",
   fotoContent: 'https://64.media.tumblr.com/tumblr_mc362p66zr1qkktc4o3_500.gifv'
   },
{
      name: "Ілюша",
      fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4bCIMagAjkr4VHJNnFzG54ULRgF958ZgLw&usqp=CAU',
      nickname: '@dick',
      content: "Пробачте засранця",
   fotoContent: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYyRGwZDTijjmDA-EELgpEVQvLx9jfn81HA&usqp=CAU'
   },
   {
      name: "Вова",
      fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3piXv_Qr5CupXr8g99uuyTc_iLi_EGzipQ&usqp=CAU',
      nickname: '@Vol ',
      content: "",
      fotoContent: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEAdFY6rnFRT_Vdj_It7VV86TrMId7YBH5w&usqp=CAU'
   }
]
function AllPosts() {
   return (
      <div className="AppInner">
         {obj.map((p, i) => <Post key={i}{...p} />)}
      </div>
   );
}

export default AllPosts;