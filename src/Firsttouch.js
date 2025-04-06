import React from "react";
import m4 from "./images/m4.jpeg";

function FirstTouch() {
  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "20px" }}>
      <div>
        <img src={m4} alt="pic loading..." style={{ marginTop: "30px", marginRight: "30px", width: "500px" }} />
      </div>
    </div>
  );
}

export default FirstTouch;
