import React from "react";

type Props = {
  title: string;
  desc: string | number;
};

const More = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[#767E94] text-[16px] font-normal">{title}</h1>
      <h3 className="text-[#C3C8D4] text-[20px]">{desc}</h3>
    </div>
  );
};

export default More;
