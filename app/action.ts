"use server";

export const fetchMovie = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=fr&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const getMovieById = async (movieId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=fr`
  );
  const data = await response.json();
  return data;
};
