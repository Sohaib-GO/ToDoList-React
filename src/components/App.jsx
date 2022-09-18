import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Time from "./Time";

function App() {
  // use React hooks 
  const [inputText, setInputText] = useState();
  const [items, setItems] = useState([]);

  // Handles change in input 
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Adds a task 
  function addItem() {
    setItems((prevItems) => {
      // returns the inputted text as an item(task)
      return [...prevItems, inputText];
    });
    // Clear input text after submitting input
    setInputText("");
  }

  // Deletes a task 
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        // returns everything except the deleted item(id)
        return index !== id;
      });
    });
  }

  // to remove all items
  const removeAll = () => {
    // returns empty array 
    setItems([]);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <h5>
        {" "}
        <Time />
      </h5>

      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="Enter your task"
        />

        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {/* Maps through the array  */}
          {items.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              key={index}
              id={index}
              onDelete={deleteItem}
            />
          ))}
        </ul>

        {/* Delete all tasks  */}
        <button onClick={removeAll} className="DeleteAllButton">
          Delete All
        </button>
        <div className="taskCount">
        {/* Tasks counter with pluralization  */}
          You have {items.length} task{items.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
}

export default App;
