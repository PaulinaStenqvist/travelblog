import bild from "../../images/bild.png"
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
         className="postImg"
        src={bild} alt="postbild" 
        />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Land</span>
            <span className="postCat">Land2</span>
        </div>
        <span className="postTitle">
            Lorem ipsum, dolor sit amet. 
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa eveniet eaque rem iste molestias deserunt placeat. Impedit consectetur velit ipsa voluptatum esse soluta quaerat beatae magnam natus, accusantium distinctio consequatur.</p>
    </div>
  )
}
