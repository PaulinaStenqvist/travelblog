import Sidebar from "../../components/sidebar/sidebar";
import profilbildSidebar from "../../images/profilbildSidebar.jpg";
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Uppdatera ditt konto</span>   
          <span className="settingsDeleteTitle">Radera ditt konto</span>
        </div>
        <form className="settingsForm">
          <label>Profilbild</label>
          <div className="settingsProfilePicture">
            <img className="settingsProfileImg" src={profilbildSidebar} alt="Profilbild" 
            />
            <label htmlFor="fileInput">
            <i className="settingsIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
        <label> Användarnamn</label>
        <input type="text" placeholder="user" />
        <label> Email</label>
        <input type="email" placeholder="exempel@exemple.com" />
        <label> Lösenord</label>
        <input type="password"/>
        <button className="settingsButton"> Spara</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
