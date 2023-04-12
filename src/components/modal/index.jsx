import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
 
export default function Modal({children, open, handleOpen}) {
  
  return (
    <React.Fragment>
      <Dialog size="xl" className="h-screen" open={open} handler={handleOpen}>
      {children}
      </Dialog>
    </React.Fragment>
  );
}