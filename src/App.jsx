import { useState } from "react";
import "./App.css";
import backGroundHome from "./assets/backGroundHome.png";

function App() {
  return (
    <>
      <h1>Welcome Rental Cars</h1>
      <div className="card">
        <img src={backGroundHome} alt="panorama Lviv" />
      </div>
    </>
  );
}

export default App;
