import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios"
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts")
      console.log(res)
    }
    fetchPosts()
  },[])
  return (
      <>
         <Header/> 
        <div className="home">
        <Posts/>
        <Sidebar/>
        </div>
      </>
  );
}
