import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Textfield from "./Components/Textfield";
import Submitbtn from "./Components/Submitbtn";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    if (task.trim() === "") {
      alert("Please enter a task.");
    } else {
      setData([...data, { task }]);
      setTask("");
    }
  };

  const dltData = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="fullscreen-bg">
      <Navbar />
      <Header />
      <div className="container-fluid d-flex justify-content-center">
        <Textfield
          value={task}
          onChange={(event) => setTask(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div
          onClick={addData}
          style={{ marginRight: "2rem", marginTop: "23px" }}
        >
          <Submitbtn />
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div
            key={index}
            className="container d-flex justify-content-between my-3"
            style={{
              backgroundColor:"#a9c4c4",
              padding: "10px",
              minWidth: "25px",
            }}
          >
            <div
              className="form-check"
              style={{marginTop:"7px"}}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckIndeterminate"
              ></label>
            </div>
            <h3>{element.task}</h3>
            <div onClick={()=>dltData(index)} style={{ marginLeft: "200px" }}>
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: "100px" }}
              >
                Delete Task
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default App;
