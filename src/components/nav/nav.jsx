import "./nav.css"
import bild from "../../images/bild.png";

export default function Nav() {
  return (
    <div className="head">
       <div className="topLeft">
       <i className="topIcon fa-brands fa-github"></i>
       <i className="topIcon fa-brands fa-instagram"></i></div>
       <div className="topCenter">
        <ul className="navList">
          <li className="navListItem">HOME</li>
          <li className="navListItem">ABOUT</li>
          <li className="navListItem">CONTACT</li>
          <li className="navListItem">WRITE</li>
          <li className="navListItem">LOGOUT</li>
        </ul>
       </div>
       <div className="topRight">
        <img 
          className="topImage"
        src={bild} alt="profile picture"
         />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
       
       </div>
    </div>
  )
}
