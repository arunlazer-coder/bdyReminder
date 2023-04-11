import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { Button } from "./widgets/button";

export const Form = () => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };
  return (
    <div className="flex justify-center mt-5 py-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png"
          alt="Sunset in the mountains"
        />

        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none text-gray-700 w-50 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="BirthDay Guy's Name"
              aria-label="Full name"
            />
            <div className="pr-5 w-100">
              <Datepicker
                onChange={handleChange}
                show={show}
                setShow={handleClose}
              />
            </div>
          </div>
          <Button cls="my-5 w-full"> Save </Button>
        </form>
      </div>
    </div>
  );
};
