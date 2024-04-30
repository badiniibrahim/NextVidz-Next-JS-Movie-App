import React from "react";
import { Button } from "@/components/ui/button";

const ButtonContainer = () => {
  return (
    <div className="flex flex-row gap-4 mt-[50px] w-[250px] h-[56px] rounded-[12px] backdrop-opacity-10 bg-black/[0.3] items-center pl-2">
      <Button variant={"custom"}>All</Button>
      <div className="text-[#A8AEBF]">Movies</div>
      <div className="text-[#A8AEBF]">TV Shows</div>
    </div>
  );
};

export default ButtonContainer;
