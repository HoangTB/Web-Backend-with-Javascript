import React, { useEffect, useState } from "react";
import "./FormUser.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axiosClient from "../../api/axios";
const FormUser = () => {
  const [users, setUsers] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  useEffect(() => {
    axiosClient({
      method: "GET",
      url: "api/v1/users",
    }).then((data) => setUsers(data.data));
  }, [reloadData]);

  const handelDelete = (id) => {
    axiosClient({
      method: "DELETE",
      url: `api/v1/users/${id}`,
    }).then((data) => console.log(data));
    alert("Delete users successfully !!");
    setReloadData(true);
  };
  return (
    <div className="formDiv">
      <h1>Users Panel</h1>
      <button></button>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>WEBSITE</th>
            <th>PHONE</th>
            <th style={{ width: "200px" }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button
                      className="btn deleteBtn"
                      onClick={() => handelDelete(user.id)}
                    >
                      <AiFillDelete className="delete" />
                    </button>{" "}
                    <button className="btn editBtn">
                      <AiFillEdit className="edit" />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default FormUser;
