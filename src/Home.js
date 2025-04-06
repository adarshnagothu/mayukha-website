import React from "react";
import { Link } from "react-router-dom";
import m1 from "./images/m1.jpeg";
import m2 from "./images/m2.jpeg";

function Home() {
  return (
    <>
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "20px" }}>
      <div>
        <img src={m1} alt="pic loading..." style={{ marginTop: "30px", marginRight: "30px", width: "500px" }} />
        <img src={m2} alt="pic loading..." style={{ marginTop: "30px", width: "500px" }} />
      </div>
      </div>
    </>
  );
}

export default Home;
