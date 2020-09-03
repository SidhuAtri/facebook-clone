import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
