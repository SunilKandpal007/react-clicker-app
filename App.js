import React, {useState} from "react";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
import './App.css';

function App() {

  const [title] = useState("Clicker App");

  return (
    <div className="App">
      <Header title={title}/>
      <Clicker/>
    </div>
  );
}

export default App;
