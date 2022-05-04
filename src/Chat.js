import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  const [seed, setSeed] = useState(" ");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e)=> {

  }
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
        <p className={`chat-message ${true &&"chat-reciever"}`}>
          <span className="chat-name">Vishnu G Prasad</span>
          hey message 
          <span className="chat-timestamp">3:52pm</span>
        </p>
        
      </div>
      <div className="chat-footer">
        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form>
          <input placeholder="type a message" type = "text"/>
            <button onClick={sendMessage} type = "submit"> send a message</button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}

export default Chat;
