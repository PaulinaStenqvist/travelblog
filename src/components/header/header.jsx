import "./header.css"
import bild2 from "../../images/bild2.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Semesterdagboken </span>
        <span className="headerTitleSm">Följ med in i en familjs semesterdagbok</span>
      </div>
        <img className="headerImg"
          src={bild2} alt="backgroundimg" 
        />  
    </div>
  )
}

