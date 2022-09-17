import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Time from "./Time";

function App() {
  const [inputText, setInputText] = useState();
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText,];
    });
    // to have an empity input after adding
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <h5> <Time/>  </h5>

      <div className="form">
        <input onChange={handleChange} type="text"  value={inputText}    />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
