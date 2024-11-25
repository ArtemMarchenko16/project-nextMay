import {IMovie} from "../models/IMovie";
import {IGenre} from "../models/IGenre";
import {
    baseURLForGetGenres, baseURLForGetGenresById,
    baseURLForGetMovies,
    baseURLForGetMoviesById,
    baseURLForSearch,
    options
} from "@/app/urls/urls";

export const getDataFromAPI = {
    movies: {
        getMovies: async (page: string | string[]): Promise<IMovie[]> => {
            const response = await fetch(`${baseURLForGetMovies}?page=${page}`, options);
            const data = await response.json();
            return data.results || [];
        },
        getMoviesById: async (id: number) => {
            const response = await fetch(`${baseURLForGetMoviesById}/${id}`, options);
            const data = await response.json();
            return data;
        },
        getMoviesBySearch: async (query: string, page: string): Promise<{ movies: IMovie[]; totalPages: number }> => {
            const response = await fetch(`${baseURLForSearch}${encodeURIComponent(query)}&page=${page}`, options);
            const data = await response.json();
            return {
                movies: data.results || [],
                totalPages: data.total_pages || 0,
            };
        }
    },
    genres: {
        getGenres: async (): Promise<{ genres: IGenre[] }> => {
            const response = await fetch(baseURLForGetGenres, options);
            const data = await response.json();
            return data;
        },

        // https://api.themoviedb.org/3/discover/movie?page=1&with_genres=10752
        getMoviesByGenres: async (id: string, page: string): Promise<{ movies: IMovie[]; totalPages: number }> => {
            const response = await fetch(`${baseURLForGetGenresById}?page=${page}&with_genres=${id}`, options);
            const data = await response.json();
            return {
                movies: data.results || [],
                totalPages: data.total_pages || 0,
            }
        }



    }
};

