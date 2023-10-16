import Home from "./pages/home/home";
import Nav from "./components/nav/nav";
import Singel from "./pages/singel/singel";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
<Router>
  <Nav />
  <Routes>
  <Route exact path="/" element={  <Home />}/>
  <Route path="/register" element={ user ? <Home /> : <Register />}/>
  <Route path="/login" element={ user ? <Home /> : <Login />}/>
  <Route path="/write" element={ user ? <Write /> : <Register />}/>
  <Route path="/settings" element={ user ? <Settings /> : <Register />} />
  <Route path="/post/:postId" element={<Singel />} />
  </Routes>
</Router>
    );
}

export default App;
