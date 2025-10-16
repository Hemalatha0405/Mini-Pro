import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.css';


export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = { username, password };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const text = await response.text(); // Backend returns plain text like "Successfully Registered"

      console.log("Register response:", text);

      if (response.ok && text.toLowerCase().includes("success")) {
        alert("Registered successfully! Please login.");
        navigate("/login");
      } else if (response.status === 409) {
        alert("Username already exists. Try a different one.");
      } else {
        alert(text || "Registration failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server not reachable!");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register Page</h2>

        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="register-button">
          Register
        </button>

        <p style={{ marginTop: "10px" }}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}
