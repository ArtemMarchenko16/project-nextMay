import React from 'react';
import PaginationComponent from "@/app/components/moviesComponent/PaginationComponent";
import {getDataFromAPI} from "@/app/services/api.service";
import Link from "next/link";



const Page = async ({ searchParams}: { searchParams: { query: string; page?: string } }) => {

    const query = searchParams.query || "";
/////
    const page = searchParams?.page || '1';

    const { movies, totalPages } = await getDataFromAPI.genres.getMoviesByGenres(query, page);


    return (
        <div>
            {query}
            {movies.map((movie) => (
                <div key={movie.id}>

                    <Link href={`/movies/${movie.id}`}>

                        <div>{movie.title}</div>
                    </Link>

                </div>
            ))}
            <PaginationComponent query={query} totalPages={totalPages} currentPage={Number(page)} />
        </div>
    );
};

export default Page;