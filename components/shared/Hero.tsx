import React from "react";
import CustomSearch from "./Search";
import ButtonContainer from "./ButtonContainer";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-[50px]">MaileHereko</div>
      <div className="text-white text-[16px] w-[588px]">
        List of movies and TV Shows, I, Pramod Poudel have watched till date.
        Explore what I have watched and also feel free to make a suggestion. 😉
      </div>
      <CustomSearch />
      <ButtonContainer />
    </div>
  );
};

export default Hero;
