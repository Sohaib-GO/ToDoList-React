import React from "react";
import handleCheck from "./App";

function ToDoItem(props) {
  // Cross off completed tasks by clicking on the text
  const handleCheck = (event) => {
    // if not clicked (initial state) apply the following (removes the properties)
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
      event.target.style.removeProperty("color", "green");
      //  if clicked apply the following properties
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
      event.target.style.setProperty("color", "green");
    }
  };

  return (
    <div>
      <li onClick={handleCheck}>
        {props.text}

        <div
          className="fa fa-light fa-trash"
          onClick={() => {
            props.onDelete(props.id);
          }}
        ></div>
      </li>
    </div>
  );
}

export default ToDoItem;
