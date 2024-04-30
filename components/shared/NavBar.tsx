import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between mt-3 sticky">
      <Link href={"/"}>
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
      </Link>
      <div className="flex flex-row gap-9">
        <div className="text-[#A8AEBF]">Movies</div>
        <div className="text-[#A8AEBF]">TV Shows</div>
        <div className="flex flex-row gap-2">
          <div className="text-[#A8AEBF]">Suggest me</div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
