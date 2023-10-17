import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import { useLocation } from "react-router";
import axios from "axios"
import "./home.css"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/getall");
      setPosts(res.data);
    };
    fetchPosts();
  },[search]);
  return (
      <>
         <Header/> 
        <div className="home">
        <Posts posts={posts} />
        <Sidebar/>
        </div>
      </>
  );
}
