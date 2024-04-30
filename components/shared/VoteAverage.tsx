import React from "react";
import Image from "next/image";

const VoteAverage = ({ voteAverage }: { voteAverage: number | string }) => {
  return (
    <div className="flex flex-row w-[68px] h-[32px] rounded-[8px] items-center bg-black gap-1 px-2">
      <Image
        src={"/star.png"}
        alt="backdrop_path"
        width={16}
        height={16}
        priority
      />
      <div className="text-[#FFAD49]">{voteAverage}</div>
    </div>
  );
};

export default VoteAverage;
