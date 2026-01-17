import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonPost from "./PersonPost";



function Users() {
  const [users, setUsers] = useState([]);

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


    

  return (
    <div className="container">
      {users.map((user) => (
        <div
          key={user.id}
          className="card mb-3"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
           
     <button >View Post</button>
            
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
