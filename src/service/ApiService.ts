import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, IMovieResult } from "../type";

const api_key = "6eaa8116c5dea92c1c42dca1718cbc6e";
const base_url = "https://api.themoviedb.org/3";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    searchMovies: builder.query<IMovieResult, string>({
      query: (searchQuery) => ({
        url: `/search/tv`,
        params: { query: searchQuery, api_key: api_key },
      }),
    }),
    getTopRatedMovies: builder.query<IMovieResult[], number>({
      query: (page = 1) => ({
        url: `/tv/top_rated`,
        params: { page, api_key: api_key },
      }),
    }),
    getMovieDetails: builder.query<IMovie, number>({
      query: (movieId) => ({
        url: `/movie/${movieId}`,
        params: { api_key: api_key },
      }),
    }),
  }),
});

export const {
  useGetTopRatedMoviesQuery,
  useGetMovieDetailsQuery,
  useSearchMoviesQuery,
} = movieApi;
