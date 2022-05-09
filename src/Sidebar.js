import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Sidebar() {
  const [rooms, setRooms] = useState([])
  const[flag,setFlag]= useState("")

  useEffect(() => {
    
     getDocs(collection(db, "rooms")).then(
      (querySnapshot) => {
        const collecetedDoc = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.data(), collecetedDoc);
          collecetedDoc.push(doc.data());
        });
        setRooms(collecetedDoc);
      }
    ).catch(e=> console.error(e));
    

    
  }, [flag]);
  // console.log(rooms);

  
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
        <Sidebarchat addNewChat setFlag = {setFlag}></Sidebarchat>
        {rooms.map((room) => (
          <Sidebarchat key={room.name} id={room.name} name={room.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
