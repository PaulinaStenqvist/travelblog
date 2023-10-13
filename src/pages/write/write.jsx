import bild3 from "../../images/bild3.jpg"
import "./write.css"

export default function Write() {
  return (
    <div>
      <div className="write">
        <img
        className="writeImg" src={bild3} alt="bild" 
        />
        <form className="textForm">
          <div className="writeFormGroup">
            <label htmlFor="fileinput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style= {{display: "none"}} />
            <input type="text" placeholder="Rubrik" className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Text..." type="text" className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publisera</button>
        </form>
      </div>
    </div>
  );
}
