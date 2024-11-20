import {IMovie} from "./IMovie";

export interface IResponse {
    skip: number,
    total: number,
    limit: number,
    movies: IMovie[],
}