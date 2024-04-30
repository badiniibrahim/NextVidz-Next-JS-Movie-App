import React from "react";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
import VoteAverage from "./VoteAverage";

interface Prop {
  movie: Movie;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MovieCard = ({ movie, index }: Prop) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="flex flex-col h-[280px] w-[282px] rounded-[12px] bg-colorBlue cursor-pointer"
    >
      <Link href={`/details/${movie.id}`}>
        <div className="flex absolute mt-4 mx-3">
          <VoteAverage voteAverage={movie.vote_average.toFixed(2)} />
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="backdrop_path"
          width={2250}
          height={1390}
          priority
          objectFit="cover"
          className="flex py-[8px] px-[8px] h-[230px]"
        />
      </Link>
      <h2 className="text-[#EBEEF5] text-sm px-3">{movie.title}</h2>
    </MotionDiv>
  );
};

export default MovieCard;
