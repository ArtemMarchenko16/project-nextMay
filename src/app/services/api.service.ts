import {IMovie} from "../models/IMovie";
import {IGenre} from "../models/IGenre";
import {baseURLForGetGenres, baseURLForGetMovies, options} from "@/app/urls/urls";

export const getDataFromAPI = {
    movies: {
        getMovies: async (): Promise<IMovie[]> => {
            const response = await fetch(baseURLForGetMovies, options);
            const data = await response.json();
            return data.results || [];
        },
        getMoviesById: async (id: string) => {
            const response = await fetch(`${baseURLForGetMovies}/${id}`, options);
            const data = await response.json();
            return data;
        }
    },
    genres: {
        getGenres: async (): Promise<{ genres: IGenre[] }> => {
            const response = await fetch(baseURLForGetGenres, options);
            const data = await response.json();
            return data;
        }
    }
};


//     pagination: {
//
//         pag: async (page:number):Promise<IMovie[], IResponseFnGetMovies> => {
//             const skip = (page - 1 ) * 30;
//             const response = await fetch(`${baseURLForGetMovies}/${skip}`, optionsForMovies, {
//                 params: {
//                     skip: skip
//                 }
//             });
//             const newObj = {
//                 movies: response.data.movies,
//                 flag: false
//             }
//             if (response.data.total === response.data.movies[response.data.movies.length - 1].id) {
//                 newObj.flag = true
//             } else {
//                 newObj.flag = false
//             }
//             return newObj
//
//             const data = await response.json();
//             return data.results || [];
//
//
//         },
//
//         getAll: async (page: number):Promise<IResponseFnGetMovies> => {
//             const skip = (page - 1 ) * 30;
//
//             const axiosResponse = await <IResponse>fetch("/users", {
//                 params: {
//                     skip: skip
//                 }
//             } );
//             const newObj = {
//                 users: axiosResponse.data.users,
//                 flag: false
//             }
//             if (axiosResponse.data.total === axiosResponse.data.users[axiosResponse.data.users.length - 1].id) {
//                 newObj.flag = true
//             } else {
//                 newObj.flag = false
//             }
//             return newObj
//         }
//     }
// }
