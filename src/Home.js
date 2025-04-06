import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import m1 from "./images/m1.jpeg";
import m2 from "./images/m2.jpeg";

function Home() {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (step === 1) {
      setStep(2); // Move to name asking step
      setInput("");
    } else if (step === 2) {
      if (input.trim().toLowerCase() === "adarsh") {
        setResponse("✅ Access granted! Redirecting to FirstTouch...");
        setTimeout(() => {
          navigate("/FirstTouch");
        }, 1000);
      } else {
        setResponse("❌ FirstTouch is not accessible to you.");
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "20px" }}>
      <div>
        <img src={m1} alt="pic loading..." style={{ marginTop: "30px", marginRight: "30px", width: "500px" }} />
        <img src={m2} alt="pic loading..." style={{ marginTop: "30px", width: "500px" }} />
      </div>

      {/* Chatbot UI */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#ffffff",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        <p style={{ marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
          🤖 Chatbot: {step === 1 ? "Say hi or enter anything..." : "What is your name?"}
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={step === 1 ? "Say hi..." : "Enter your name"}
          style={{
            padding: "8px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ddd"
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%"
          }}
        >
          Submit
        </button>

        {response && (
          <p style={{ marginTop: "10px", color: response.includes("not") ? "red" : "green" }}>
            {response}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
