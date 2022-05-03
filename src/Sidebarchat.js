import React from "react";
import "./Sidebarchat.css";
import { Avatar} from "@mui/material";
import {useState , useEffect} from "react";
 

function Sidebarchat({addNewChat}) {
    const [seed , setSeed] = useState(null)

    useEffect(()=>{
        setSeed( Math.floor(Math.random()*5000))
    },[])

    const createChat = ()=>{
        const roomName = prompt("Enter Room Name");
        if(roomName){
            //do some clever database stuff
        }
    }

  return !addNewChat ? (
  <div className="sidebarchat">
      <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
      <div className="sidebarchat-info">
          <h2>Room name</h2>
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
