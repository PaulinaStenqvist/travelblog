import "./nav.css"
import bild from "../../images/bild.png";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Nav() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({type: "LOGOUT" });
  };

  return (
    <div className="head">
       <div className="navLeft">
       <i className="navIcon fa-brands fa-instagram"></i></div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HEM
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              OM
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              KONTAKT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              SKRIV
            </Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>
            {user && "LOGGA UT"}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/settings">
            <img className="navImage" src={PF+user.profilePic} alt="Profil Picture" />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGGA IN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGRISTRERA
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
