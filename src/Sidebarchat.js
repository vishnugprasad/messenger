import React from "react";
import "./Sidebarchat.css";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";

function Sidebarchat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState(null);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter Room Name");
    if (roomName) {
      setDoc(doc(db, "rooms", roomName), {
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
      ></Avatar>
      <div className="sidebarchat-info">
        <h2>{name}</h2>
        <p>last message..</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default Sidebarchat;
