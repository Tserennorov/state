import React from "react";

const Todolist = (props) => {
  const { todoList } = props;
  return (
    <div>
      {todoList.map((todo) => {
        return <h1>{todo}</h1>;
      })}
    </div>
  );
};

export default Todolist;
