import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./widgets/button";

export const Error = () => {
  return (
    <div className="background-image flex justify-center items-center ">
      <Button cls="mt-56">
        <Link to="/">Direct Me!</Link>
      </Button>
    </div>
  );
};
