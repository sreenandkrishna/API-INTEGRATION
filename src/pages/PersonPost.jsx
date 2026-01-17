import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PersonPost() {
    const {id}  =useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPersonPost = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
        );
        setPosts(res.data);
      } catch (err) {
        setError("Error during fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchPersonPost();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
      <div className="container">
        {posts.map((post)=>(
             <div className="card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
        ))}
   
  </div>
  );
}

export default PersonPost;
