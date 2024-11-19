import {IMovie} from "@/app/models/IMovie";

export interface IResponse {
    skip: number,
    total: number,
    limit: number,
    movies: IMovie[],
}