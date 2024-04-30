import { getMovieById } from "@/app/action";
import React from "react";
import MovieDetailCard from "../components/MovieDetailCard";

const Details = async ({ params }: { params: { movieId: number } }) => {
  const data = await getMovieById(params.movieId);
  return <MovieDetailCard movieDetail={data} />;
};

export default Details;
