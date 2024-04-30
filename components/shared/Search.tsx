import React from "react";
import { ArrowRight } from "lucide-react";
import { Search } from "lucide-react";

const CustomSearch = () => {
  return (
    <div className="flex flex-row gap-4 mt-[50px] w-[344px] h-[50px] rounded-[12px] backdrop-opacity-1 bg-black/[0.3] items-center pl-2 border-[0px] border-gray-100">
      <Search color="#ffffff" />
      <input
        placeholder="Search Movies or TV Shows"
        className="bg-black/[0.3] w-[272px] border-none focus:outline-none"
      />
    </div>
  );
};

export default CustomSearch;
