import { createDynamicallyTrackedSearchParams } from "next/dist/client/components/search-params";
import React from "react";

export const Button = (props) => {
  const { handleclick } = props;
  return (
    <button onClick={handleclick} style={{ width: 30, height: 30 }}></button>
  );
};
