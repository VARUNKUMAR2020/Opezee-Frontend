import React from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const Camera = () => {

  const navigate = useNavigate();

const handleHome = () =>{
   navigate('/')
}

  return (
    <div className="webCam">
      <button className="btn btn-success" onClick={handleHome}>HOME</button>
      <Webcam height={760} screenshotFormat="image/jpeg" width={1500} />
    </div>
  );
};

export default Camera;
