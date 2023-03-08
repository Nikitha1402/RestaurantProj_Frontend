import React, { useState, useEffect } from "react";
import axios from "axios";
import './update.css'

function Update() {
  const [emp, setEmp] = useState({
    fullName: "",
    lastName: "",
    email: "",
    password:"",

  });

  const handleChange = (event) => {
    setEmp({ ...emp, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/UpdateDetails`, emp).then((res) => {
      console.log(res.data);
      setEmp({ fullName: "", lastName: "",email: "",password: "" });
    });
  };

  return (
    <div className="updatecs">
      
      <center><form onSubmit={handleSubmit}>
      <label>
          FULLNAME:
          <input type="text" className="design" name="fullName" placeholder="Enter your fullname"value={emp.fullName} onChange={handleChange} />
        </label><br/>
        <br></br>
        <label>
          LASTNAME
          <input type="text"className="id" name="lastName" placeholder="Enter your lastname" value={emp.lastName} onChange={handleChange} />
        </label><br/>
        <br></br>

        <label>
          User Email:
          <input type="text" className="em" name="email"  placeholder="Enter a email" value={emp.email} onChange={handleChange} />
        </label><br/>
        <br></br>
        <label>

          PASSWORD
          <input type="number" className="mb" name="password" placeholder="Enter password*"value={emp.password} onChange={handleChange} />
        </label><br/>
        <br></br>

        
      <center> <button type="submit" className="up">Update</button></center>
        <h5>* Customer can see the updated new dishes</h5>
      </form>
      </center>
    </div>
  );
}

export default Update;