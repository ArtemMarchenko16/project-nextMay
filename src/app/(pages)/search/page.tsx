import { getDataFromAPI } from "@/app/services/api.service";
import styles from "./xxx.module.css";
import React from "react";
import Link from "next/link";
import PaginationComponent from "@/app/components/moviesComponent/PaginationComponent";

const SearchPage = async ({ searchParams }: { searchParams: { query: string; page?: string } }) => {
    const query = searchParams.query || "";
    const page = searchParams.page || "1";


    const { movies, totalPages } = await getDataFromAPI.movies.getMoviesBySearch(query, page);


    return (
        <div>
            <div className={styles.styleForResults}>
                <h2>Search results for: {query}</h2>
            </div>
            <div className={styles.container}>
                {movies.map((movie) => (
                    <div className={styles.settingsForBlocks} key={movie.id}>

                            <Link href={`/movies/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    className={styles.moviePoster}
                                    alt={movie.title}
                                />
                                <h3 className={styles.movieTitle}>{movie.title}</h3>
                            </Link>

                    </div>
                ))}
            </div>
            <div className={styles.styleForPagination}>
                <PaginationComponent query={query} currentPage={Number(page)} totalPages={totalPages} />

            </div>
        </div>
    );
};
export default SearchPage;
