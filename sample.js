import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const options = [
    { label: "Fruit", value: "fruit" },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const onOptionChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <label>FirstName</label>
        <input
          type="text"
          placeholder="type name.."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Lastname</label>
        <input
          type="text"
          placeholder="type lastname..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Male</label>
        <input
          type="radio"
          name="male"
          value="male"
          checked={gender === "male"}
          onChange={onOptionChange}
        />
      </div>
      <div>
        <label>Female</label>
        <input
          type="radio"
          name="female"
          value="female"
          checked={gender === "female"}
          onChange={onOptionChange}
        />
      </div>
      <div>
        <label>select fruit</label>
        {/* <select value={} onc>

        </select> */}
      </div>
    </div>
  );
}

export default App;
