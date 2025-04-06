import React, { useState } from "react";
import m1video from "./Videos/m1video.mp4";
import m2video from "./Videos/m2video.mp4";

const videoData = [
  {
    title: "crying",
    src: m1video,
  },
  {
    title: "First Smile",
    src: m2video,
  },
];

function CuteMoments() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = videoData.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#fff0f5", minHeight: "100vh", padding: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#ff66b2", fontSize: "36px", marginBottom: "20px" }}>
        Cute Moments
      </h2>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredVideos.map((video, index) => (
          <div key={index} style={{ width: "250px", textAlign: "center" }}>
            <video
              height="280"
              width="100%"
              controls
              style={{ borderRadius: "10px", objectFit: "cover" }}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p style={{ fontWeight: "bold", marginTop: "10px", color: "#ff3399" }}>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CuteMoments;
