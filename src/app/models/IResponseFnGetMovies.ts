import {IMovie} from "./IMovie";

export interface IResponseFnGetMovies {
    movies: IMovie[],
    flag: boolean
}