import React from "react";
import "./Sidebarchat.css";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import {Link} from "react-router-dom"

function Sidebarchat({ id, name, addNewChat, setFlag }) {
  const [seed, setSeed] = useState(null);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter Room Name");
    if (roomName) {
      setDoc(doc(db, "rooms", roomName), {
        name: roomName
      });
    }
    setFlag(Math.random())
  };

  console.log(id);

  return !addNewChat ? (

    <Link to = {`/rooms/${id}`}>
<div className="sidebarchat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
      ></Avatar>
      <div className="sidebarchat-info">
        <h2>{name}</h2>
        <p>last message..</p>
      </div>
    </div>
    </Link>
    
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default Sidebarchat;
