import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import Todolist from "./Todolist";

export const Header = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodolist] = useState([]);

  const handlechange = (event) => {
    setValue(event.target.value);
  };

  const handleclick = () => {
    setTodolist((prev) => [...prev, value]);
  };

  return (
    <div className="header">
      <h1 style={{ color: "blue" }}>Todolist</h1>
      <div className="todolistContainer">
        <div className="inputButtonContainer">
          <Input handlechange={handlechange} valuesource={value} />
          <Button handleclick={handleclick} />
        </div>
        <Todolist todoList={todoList} />
      </div>
    </div>
  );
};
