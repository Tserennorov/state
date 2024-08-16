import { createPostponedAbortSignal } from "next/dist/server/app-render/dynamic-rendering";
import React, { useState } from "react";

export const Input = (props) => {
  const { handlechange, valuesource } = props;
  return (
    <div>
      <input
        placeholder="what need to be done?"
        style={{
          width: "70vh",
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        type="text"
        value={valuesource}
        onChange={handlechange}
      />
    </div>
  );
};
