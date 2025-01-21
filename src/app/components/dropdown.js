import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

export const DropDownMenu = () => {
  return (
    <div>
      <DropDownLarge/>
    </div>
  );
};

const DropDownLarge = () => {
  // Ensure this component returns some JSX
  return (
    <div><p>ini tampilan large</p></div>
  );
};
