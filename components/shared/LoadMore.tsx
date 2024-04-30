"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchMovie } from "@/app/action";
import MovieCard from "./MovieCard";

let page = 2;

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    if (inView) {
      fetchMovie(page).then((res) => {
        setData([...data, ...res.results]);
        page++;
      });
    }
  }, [data, inView]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: Movie, index: number) => (
          <MovieCard movie={item} key={index} index={index} />
        ))}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
