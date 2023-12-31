import Sidebar from "../../components/sidebar/sidebar";
import profilbildSidebar from "../../images/profilbildSidebar.jpg";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./settings.css"


export default function Settings() {
const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };


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
             <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="settingsIcon fa-regular fa-circle-user"></i>
            </label>
            <input 
            type="file" 
            id="fileInput" 
            style={{display:"none"}}
            onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Användarnamn</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Lösenord</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsButton" type="submit">
            Spara
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profilen är uppdaterad...
            </span>
          )}
          </form>
      </div>
      <Sidebar/>
    </div>
  );
}
