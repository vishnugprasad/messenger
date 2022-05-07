import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>messenger</h1>
      <div className="app-body">
        <Router>
          <Route></Route>
        <Sidebar></Sidebar>
          <Switch>
         
            <Route path="/rooms/:roomId">
             
              <Chat></Chat>

            </Route>
            {/* <Route path="/">
             <Chat></Chat>
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
