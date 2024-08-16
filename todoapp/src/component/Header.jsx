import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="header">
      <h1 style={{ color: "blue" }}>Todolist</h1>
      <div className="inputButtonContainer">
        <Input />
        <Button />
      </div>
    </div>
  );
};
