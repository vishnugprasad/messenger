import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>messenger</h1>
      <div className="app-body">
        <Router>
          
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat></Chat>}>
             
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
