"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

function page() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex items-center justify-center w-[100%] h-screen">
      <div className="flex gap-4 w-[400px] flex-col">
        <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
        />
        <Input
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Button color="primary" className="bg-gray-950 w-[100%]">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default page;
