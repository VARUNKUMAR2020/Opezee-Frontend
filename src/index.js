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
    <Route path="https://varun-opezee.netlify.app/" element={<Home/>} />
    <Route path="https://varun-opezee.netlify.app/settings" element={<Settings/>} />
    <Route path="https://varun-opezee.netlify.app/camera" element={<Camera/>}/>
    <Route path='https://varun-opezee.netlify.app/player' element={<Player/>}/>
    </Routes> 
  </BrowserRouter>
);
