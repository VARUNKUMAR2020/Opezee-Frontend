import React, { useEffect, useState } from "react";
import setting from "../assets/icons8-setting.svg";
import axios from "axios";

function Home() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios
      .get("https://opezee-backend.onrender.com/apps")
      .then((res) => setApps(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [loadingAppIndex, setLoadingAppIndex] = useState(null);

  const handleAppClick = (index) => {
    setLoadingAppIndex(index);
    setTimeout(() => {
      window.location.href = apps[index].url;
    }, 2000);
  };
  return (
    <div className="row main">
      {/* Left Column */}
      <div className="col-md-4 col-sm-2 left-corner">
        <div className="ms-2 mt-2">
          <a href="https://varun-opezee.netlify.app/settings">
            <img src={setting} alt="setting" />
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
      <div className="col-md-8 col-sm-10 right-corner">
        <h1 className="text-center text-light h3">Applications</h1>
        <div className="row">
          {apps.map((app, index) => (
            <div
              className="col-lg-2 col-md-3 col-sm-6 icons text-center mt-5"
              key={index}
              onClick={() => handleAppClick(index)}
              style={{ cursor: "pointer" }}
            >
              {loadingAppIndex === index ? (
                <div className="text-light">Loading...</div>
              ) : (
                <>
                  <img src={app.img} alt="apps" className="app-image" />
                  <h6 className="text-center text-light">{app.name}</h6>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
