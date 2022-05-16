import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import userState, { useState } from "react"
import Login from "./Login";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const[user, setUser] = useState(null)
  return (
    <div className="app">
      {!user ? (
        <Login></Login>
      ):(
        <div className="app-body">
        <Router>
          
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat></Chat>}>
             
            </Route>
          </Routes>
        </Router>
      </div>
   
      ) }
     </div>  
  );
}

export default App;
