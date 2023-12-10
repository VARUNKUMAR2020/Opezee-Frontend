import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "../src/Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "../src/Components/Settings";
import Camera from "../src/Components/Camera";
import Player from "./Components/Player";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/settings" element={<Settings/>} />
    <Route path="/camera" element={<Camera/>}/>
    <Route path='/player' element={<Player/>}/>
    </Routes> 
  </BrowserRouter>
);
