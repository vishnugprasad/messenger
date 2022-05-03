import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat"

function App() {
  return (
    <div className="app">
     <h1>messenger</h1>
     <div className = "app-body">
      <Sidebar></Sidebar>
      <Chat></Chat>
     </div>
    </div>
  );
}

export default App;
