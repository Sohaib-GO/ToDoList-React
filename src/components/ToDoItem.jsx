import React from "react";

function ToDoItem(props) {

  const handleCheck = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
      event.target.style.setProperty("color", "green");

    }
  }

  return (
    
  <div>

      <li       onClick={handleCheck}
>

      {props.text}
      
      <div className="fa fa-light fa-trash"
    onClick={() => {
        props.onChecked(props.id);
      }}  >    
</div>

      </li>
    </div>

  );

}

export default ToDoItem;
