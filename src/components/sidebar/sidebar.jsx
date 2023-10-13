import "./sidebar.css"

export default function Sidebar() {
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
                    <li className="sidebarListItem">JORDEN RUNT</li>
                    <li className="sidebarListItem">VANCOUVER</li>
                    <li className="sidebarListItem">VANCOUVER ISLAND</li>
                    <li className="sidebarListItem">LOS ANGELES</li>
                    <li className="sidebarListItem">LAS VEGAS</li>
                    <li className="sidebarListItem">HAWAII</li>
                    <li className="sidebarListItem">SYDNEY</li> 
                    <li className="sidebarListItem">GOLD COAST</li> 
                    <li className="sidebarListItem">TOKYO</li> 
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FÖLJ OSS</span>  
            </div> 
        </div>
  );
}
