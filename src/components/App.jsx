import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleInputChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    setContact((prev) => {
      if (inputName === "fName") {
        return {
          fName: inputValue,
          lName: prev.lName,
          email: prev.email,
        };
      } else if (inputName === "lName") {
        return {
          fName: prev.fName,
          lName: inputValue,
          email: prev.email,
        };
      } else if (inputName === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: inputValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleInputChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleInputChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
