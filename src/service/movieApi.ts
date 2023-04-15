import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, IMovieResult } from "../type";

const API_KEY = "6eaa8116c5dea92c1c42dca1718cbc6e";
const BASE_URL = "https://api.themoviedb.org/3";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchMovies: builder.query<IMovieResult, string>({
      query: (searchQuery) => ({
        url: `/search/tv`,
        params: { query: searchQuery, api_key: API_KEY },
      }),
    }),
    getTopRatedMovies: builder.query<IMovieResult[], number>({
      query: (page = 1) => ({
        url: `/tv/top_rated`,
        params: { page, api_key: API_KEY },
      }),
    }),
    getMovieDetails: builder.query<IMovie, number>({
      query: (movieId) => ({
        url: `/movie/${movieId}`,
        params: { api_key: API_KEY },
      }),
    }),
  }),
});

export const {
  useGetTopRatedMoviesQuery,
  useGetMovieDetailsQuery,
  useSearchMoviesQuery,
} = movieApi;
