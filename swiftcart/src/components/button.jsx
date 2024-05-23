import React from "react";
import { Button } from "@nextui-org/react";
function customButton() {
  return (
    <>
      <h1>Button</h1>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Button
      </Button>
    </>
  );
}

export default customButton;
