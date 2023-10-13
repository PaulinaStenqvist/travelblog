import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Logga In</span>
      <form className="loginForm">
        <label>Email</label>
        <input 
        type="text" 
        className="loginInput" 
        placeholder="Fyll i din Email här..." 
        />
        <label>Lösenord</label>
        <input 
        type="password" 
        className="loginInput" 
        placeholder="Fyll i ditt Lösenord här..." 
        />
        <button className="loginButton">Logga In</button>   
    </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Registrera</Link>
        </button>
    </div>
  );
}
