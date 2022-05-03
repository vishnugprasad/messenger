import React from "react";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./Sidebar.css";

function Sidebar() {
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
          <input placeholder="start a new chat" type="text"  />
        </div>
      </div>

      <div className="sidebar-chats">
        
        <h1>sidebar chat</h1>
        <h1>sidebar chat</h1>
        <h1>sidebar char</h1>
        <h1>sidebar char</h1>
        <h1>sidebar char</h1>
        <h1>sidebar char</h1>
        <h1>sidebar char</h1>
      </div>
    </div>
  );
}

export default Sidebar;
