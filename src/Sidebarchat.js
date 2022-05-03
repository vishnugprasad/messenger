import React from "react";
import "./Sidebarchat.css";
import { Avatar} from "@mui/material";
import {useState , useEffect} from "react";
 

function Sidebarchat() {
    const [seed , setSeed] = useState(null)

    useEffect(()=>{
        setSeed( Math.floor(Math.random()*5000))
    },[])
  return(
  <div className="sidebarchat">
      <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
      <div className="sidebarchat-info">
          <h2>Room name</h2>
          <p>last message..</p>
      </div>
  </div>
  )
}

export default Sidebarchat;
