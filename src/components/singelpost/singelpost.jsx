import bild from "../../images/bild.png";
import "./singelpost.css"

export default function Singelpost() {
  return (
    <div className="singelpost">
      <div className="singelpostWrapper">
            <img src={bild} alt="" className="singelpostImg" 
        />
        <h1 className="singelpostTitle">
            Lorem, ipsum dolor sit amet.
            <div className="singelPostEdit">
            <i className="singelpostIcon fa-regular fa-pen-to-square"></i>
            <i className="singelpostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singelpostInof">
            <span className="singelpostAuthor">Autor:  <b>Paulina </b></span>
            <span className="singelpostDate"> 1 hour ago</span>
        </div>
        <p className="singelpostText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat magnam sed quisquam labore doloribus. Velit necessitatibus laudantium sed modi soluta tempore nobis quae perspiciatis error praesentium mollitia earum, ullam animi debitis nemo maxime, eaque facilis quibusdam id molestias nisi! Voluptatem quasi perspiciatis exercitationem eaque voluptatibus odit animi eum tempora, suscipit odio aliquid a tenetur nihil dolore ut pariatur aliquam tempore temporibus debitis cupiditate vero quo mollitia delectus! In ea cumque unde quibusdam voluptas nesciunt amet sequi eligendi illo repellendus. Porro, odit aspernatur suscipit accusamus repellendus corrupti quae ea maiores qui saepe neque eum est, iste iusto dolores! Numquam ipsam dolores non totam soluta, voluptatum nostrum modi deserunt enim! Aspernatur, nihil? Ipsa tempora explicabo accusantium iure facere ducimus laudantium quia ullam! Nam id deleniti doloremque similique, quis animi neque veniam accusamus praesentium quam soluta molestias alias, illo nihil? Quidem error numquam quam provident consectetur non magni similique fugit quas sint perferendis alias architecto asperiores assumenda blanditiis laborum, exercitationem tenetur necessitatibus corrupti minima explicabo sit corporis rem! Possimus quasi temporibus itaque deserunt aspernatur ipsam beatae labore sit repudiandae dolore, corrupti nostrum, inventore, eligendi perferendis enim ipsum iure placeat minus quidem? Maiores aut impedit, saepe nostrum necessitatibus rem nihil modi ducimus corporis quibusdam.</p>
      </div>
    </div>
  );
}

