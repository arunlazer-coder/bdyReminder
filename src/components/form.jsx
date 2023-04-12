import React, { useRef, useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { Button } from "./widgets/button";
import CropPreview from "./crop/CropPreview";

export const Form = () => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };
  const [selectedFile, setFile] = useState(null)
  const [isImageClicked, setClick] = useState(false)
  const imgRef = useRef(null)

  const getSrc = () => {
    return selectedFile ? URL.createObjectURL(selectedFile) : "https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png"
  } 
  return (
    <div className="flex justify-center mt-5 py-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="">
        <img
          className="w-full h-full max-h-384 cursor-pointer rounded-full object-cover"
          src={getSrc()}
          alt="Sunset in the mountains"
          onClick={() => imgRef.current.click()}
        />
        <CropPreview ref={imgRef} setFile={setFile} />
        </div>

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
