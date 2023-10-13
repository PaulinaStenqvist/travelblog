import "./singel.css"
import Sidebar from "../../components/sidebar/sidebar";
import Singelpost from "../../components/singelpost/singelpost";

export default function Singel() {
  return (
    <div className="singel">
        <Singelpost/>
        <Sidebar/>
    </div>
  );
}
