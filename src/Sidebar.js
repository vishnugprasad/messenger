import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.doc.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar></Avatar>
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>

          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-searchcontainer">
          <SearchIcon></SearchIcon>
          <input placeholder="start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar-chats">
        <Sidebarchat addNewChat></Sidebarchat>
        {rooms.map(room => (
          <Sidebarchat key ={room.id} id = {room.id} name = {room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
