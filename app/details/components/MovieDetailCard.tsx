import React from "react";
import Image from "next/image";
import More from "@/components/shared/More";
import VoteAverage from "@/components/shared/VoteAverage";
import { MotionDiv } from "@/components/shared/MotionDiv";

type Props = {
  movieDetail: MovieDetail;
};
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MovieDetailCard = ({ movieDetail }: Props) => {
  console.log({ movieDetail });
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="flex flex-col"
    >
      <section className="flex rounded-[50px] mt-4">
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
          alt="backdrop_path"
          width={2250}
          height={190}
          priority
          className="flex rounded-[50px] object-cover h-[480px]"
        />
      </section>
      <div className="flex flex-col absolute h-[144px] w-[560px] ml-[60px]  mt-[415px] bg-black/[0.3] rounded-[12px] px-6 justify-center text-left">
        <span className="text-[#BEB7FB] text-[12px]">MaileHereko / Movie</span>
        <span className="text-[#EBEEF5] text-[32px]">{movieDetail.title}</span>
      </div>
      <section className="flex flex-row gap-[40px] mt-[100px]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
          alt="backdrop_path"
          width={2250}
          height={190}
          priority
          className="flex w-[480px] h-[720px] object-cover rounded-[50px]"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-[#EBEEF5] text-[24px]">{movieDetail.title}</h1>
          <h3 className="text-[#8E95A9] text-[20px]">{movieDetail.overview}</h3>
          <VoteAverage voteAverage={movieDetail.vote_average.toFixed(2)} />

          <More title={"Type"} desc={"Movie"} />
          <More title={"Release Date:"} desc={movieDetail.release_date} />
          <More title={"Run time"} desc={movieDetail.runtime} />
          <More title={"Type"} desc={"Movie"} />
        </div>
      </section>
      <div className="mt-9" />
    </MotionDiv>
  );
};

export default MovieDetailCard;
