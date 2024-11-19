import {IMovie} from "@/app/models/IMovie";

export interface IResponseFnGetMovies {
    movies: IMovie[],
    flag: boolean
}