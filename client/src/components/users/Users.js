import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { Modal } from "react-bootstrap";
import { MainBtn } from "../styles/shared";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [adding, setAdd] = useState(false);

  useEffect(() => {
    console.log("STARTING USER FETCH");
    axios
      .get("/api/users")
      .then((res) => {
        console.log("USERS DATA", res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("DUDE IT MESSED UP!!!", err);
      });
  }, []);

  const addUser = (user) => {
    axios
      .post("/api/users", { user })
      .then((res) => {
        setUsers([...users, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (id, user) => {
    axios
      .put(`/api/users/${id}`, { user })
      .then((res) => {
        let newUpdateUsers = users.map((u) => {
          if (u.id === id) {
            return res.data;
          }
          return u;
        });
        setUsers(newUpdateUsers);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(`/api/users/${id}`)
      .then((res) => {
        setUsers(users.filter((u) => u.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MainBtn onClick={() => setAdd(true)}>+</MainBtn>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <UserForm addUser={addUser} />
        </Modal.Body>
      </Modal>

      <UserList users={users} />
    </>
  );
};

export default Users;
