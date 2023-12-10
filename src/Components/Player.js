import React, { useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const videoURL = URL.createObjectURL(selectedFile);
      setFile(videoURL);
    }
  };

  const navigate = useNavigate();

  const handleHome = () =>{
     navigate('/')
  }
  

  return (
    <div className="media-player">
      <h3 className="text-center text-danger">MEDIA PLAYER</h3>
      <button className="btn btn-success" onClick={handleHome}>HOME</button>
      <input type="file" onChange={handleFileChange} className="form-control"/>
      <div>
        {file && (
          <div className="video-div">
            <Video autoPlay loop>
              <source src={file} type="video/webm" />
            </Video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
