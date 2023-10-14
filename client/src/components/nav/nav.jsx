
import "./nav.css"
import bild from "../../images/bild.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const user = false; 
  return (
    <div className="head">
       <div className="navLeft">
       <i className="navIcon fa-brands fa-github"></i>
       <i className="navIcon fa-brands fa-instagram"></i></div>
       <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">HEM</Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">OM</Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">KONTAKT</Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">SKRIV</Link>
          </li>
          <li className="navListItem">{user && "LOGGA UT"}
          </li>
        </ul>
       </div>
       <div className="navRight">
        {
          user ? (
            <img 
            className="navImage"
          src={bild} alt="profile picture"
           />
          ) : (
            <ul className="navList">
              <li className="navListItem"> 
                <Link className="link" to="/login">
                  LOGGA IN
                </Link>
              </li>
              <li className="navListItem"> 
                <Link className="link" to="/register">
                  REGISTRERA
                </Link>
              </li>
            </ul>
          )}
      
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
       
       </div>
    </div>
  )
}
