import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function Chat() {
  const [seed, setSeed] = useState(" ");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        ></Avatar>

        <div className="chat-header-info">
          <h3>Room Name</h3>
          <p>Last Seen ...</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>

          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>

          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
            <p>hey message</p>
      </div>
      <div className="chat-footer"></div>
    </div>
  );
}

export default Chat;
