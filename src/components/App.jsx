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
    // to have an empty input after adding
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

    // to remove all items

    const removeAll = () => {
    setItems([]);
    setInputText([]);
  };



  return (
    <div className="container">
      <div className="heading">
        <h1 >To-Do List </h1>
      </div>
      <h5> <Time/>  </h5>
     

      <div className="form">
        <input  onChange={handleChange} type="text"  value={inputText}   placeholder="Enter your task"


  />

        <button  onClick={addItem}
         >
          <span>Add</span>
        </button>
        
      </div>
      <div>
        <ul>

          {items.map((todoItem, index) => (

            <ToDoItem  
              text={todoItem}
              key={index}
              id={index}
              onChecked={deleteItem}
              

            />
          ))
          }
        </ul>
        {/* Delete all tasks  */}
        <button  onClick={removeAll} className="DeleteAllButton">
              Delete All
            </button>
      </div>
    </div>
  );
}

export default App;
