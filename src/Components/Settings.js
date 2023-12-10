import React, { useState } from "react";
import home from "../assets/icons8-home.svg";
import cross from "../assets/cross-mark.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Settings() {
 
  const navigator = useNavigate();

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    axios
      .post("https://opezee-backend.onrender.com/newapp", { img, name, url })
      .then((res) => {
        alert(res.data.message);
        if(res.data.message === 'Application Created Successfully')
        navigator('https://varun-opezee.netlify.app/')
      })
      .catch((err) => console.log(err));
  };

  const handlDelete = () => {
    axios
      .post("https://opezee-backend.onrender.com/deleteApps", { name })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row main">
      {/* Left Column */}
      <div className="col-md-4 col-sm-2 left-corner">
        <div className="ms-2 mt-2">
          <a href="https://varun-opezee.netlify.app/">
            <img src={home} alt="home" />
          </a>
        </div>

        <div className="text-center ">
          <span className="text-light h4 company">op</span>
          <h2 className="text-light d-inline h1 fw-bolder fs-1 company">
            ezee
          </h2>
          <h5 className="text-light text-center h5">www.opezee.com</h5>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-md-8 right-corner">
        {/* <h1 className="text-light h4 d-inline">Settings</h1> */}
        <a
          href="https://varun-opezee.netlify.app/"
          className="text-decoration-none d-flex justify-content-end mt-2 me-4"
        >
          <img src={cross} alt="cross-mark" />
        </a>
        {/* Adding Application */}
        <div className="ms-2">
          <h3 className="h4 text-light">Add Applications</h3>
          <input
            type="text"
            className="application-input d-block mt-3 form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            className="application-input d-block mt-3 form-control"
            onChange={(e) => setImg(e.target.value)}
            placeholder="Img Url"
          />
          <input
            type="text"
            className="application-input d-block mt-3 form-control"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Source Link"
          />
          <div className="d-flex justify-content-end mt-4 mx-4">
            <button className="btn btn-primary" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>

        {/* Deletion of Application */}
        <div className="ms-2">
          <h3 className="h4 text-light">Delete Applications</h3>
          <input
            type="text"
            className="application-input d-block mt-3 form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <div className="d-flex justify-content-end mt-4 mx-4">
            <button className="btn btn-danger" onClick={handlDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
