import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Registrera</span>
      <form className="registerForm">
      <label>Användarnamn</label>
        <input 
        type="text" 
        className="registerInput" 
        placeholder="Fyll i ditt användarnamn här..." 
        />
        <label>Lösenord</label>
        <input 
        type="password" 
        className="registerInput" 
        placeholder="Fyll i ditt Lösenord här..." 
        />
        <label>Email</label>
        <input 
        type="text" 
        className="registerInput" 
        placeholder="Fyll i din Email här..." 
        />
        
        <button className="registerButton">Registrera</button>   
    </form>
      <button className="registerLoginButton">
      <Link className="link" to="/login">Logga In</Link></button>
    </div>
  );
}
