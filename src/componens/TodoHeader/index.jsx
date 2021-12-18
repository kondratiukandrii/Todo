import React, {useRef} from "react";
import "./style.scss";

const TodoHeader = ({addTodo}) => {
  const inputRef = useRef(null);
  
  const createTodo = (event) => {
    event.preventDefault();
    
    const todoObj = {
      id: new Date().getTime(),
      text: inputRef.current.value,
      complete: false,
    };
    
    addTodo(todoObj);
    
    inputRef.current.value = "";
  };
  return (
    <div className="header-wrapper">
      <form onSubmit={createTodo} className="form">
        <input ref={inputRef} type="text" />
        <button type="submit">add Todo</button>
      </form>
    </div>
  );
};

export default TodoHeader;
