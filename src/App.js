import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>messenger</h1>
      <div className="app-body">
        <Router>
          <Switch>
          <Route path = "/app">
          <Sidebar></Sidebar>
          <Chat></Chat>
          </Route>
            <Route path = "/">
              <h1>Home Screen</h1>
            </Route>
          
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
