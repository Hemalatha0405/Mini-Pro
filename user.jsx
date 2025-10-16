import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

export default function User() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { name, dob, contact };

    try {
      const response = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to submit user data");
      }

      const result = await response.text();
      alert(result);

      
      setName("");
      setDob("");
      setContact("");

      navigate("/userdetails");

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Check the console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Personal Information</h2>

      <label className="label">
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label><br />

      <label className="label">
        DOB:
        <input
          type="date"
          value={dob}
          onChange={e => setDob(e.target.value)}
          required
        />
      </label><br />

      <label className="label">
  Contact:
  <input
    type="tel"
    value={contact}
    onChange={e => setContact(e.target.value)}
    required
    pattern="\d{10}"
    maxLength={10}
    title="Contact number must be exactly 10 digits"
  />
</label><br />


      <button type="submit" className="button">Submit</button>
    </form>
  );
}
