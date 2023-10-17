import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    // useEffect(() => {
    //     const getCats = async () => {
    //       const res = await axios.get("/categories/get");
    //       setCats(res.data);
    //     };
    //     getCats();
    //   }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">OM MIG</span>
            <div className="sidebarImg">     
            </div>
            <div className="sidbarText">
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, eum praesentium! Provident explicabo, aliquam dicta quod in odio soluta dignissimos.
           </p>
           </div>
        </div>
       
        <div className="sidebarItem">
            <span className="sidebarTitle">KATEGORIER</span>
                <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FÖLJ OSS</span>  
            </div> 
        </div>
  );
}
