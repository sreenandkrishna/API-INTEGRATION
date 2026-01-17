import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./user.css"
import UserChart from "../components/UserChart";



function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  
  }, []);


      const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );


   const chartData = users.map((user) => ({
    name: user.name,
    posts: Math.floor(Math.random() * 10) + 1,
  }));

 return (
  <div className="users-wrapper">
    <input
      className="search-input"
      type="text"
      placeholder="Search user..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

     <UserChart data={chartData} />

    <div className="users-grid">
      {filteredUsers.map((user) => (
        <div key={user.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
            <Link to={`/person/${user.id}`}>
              <button>View Post</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

export default Users;
