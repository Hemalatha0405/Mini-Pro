import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
 
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
 
 const handleLogin = async (e) => {
  e.preventDefault();

  const user = { username, password };

  console.log(user)
  console.log(JSON.stringify(user))

  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log("Backend response:", data);

    if (response.ok && data.token) {
      alert("Login Successful!");

      navigate("/user");
    } else {
      
      alert(data.message || "Invalid username or password! If you are new user kindly click register");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server not reachable!");
  }
};

 
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login Page</h2>
 
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
 
        <button type="submit" className="login-button">
          Login
        </button>
 
        <p style={{ marginTop: "10px" }}>
          New user? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}
 
 