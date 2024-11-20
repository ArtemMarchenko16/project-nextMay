import React from "react";
import styles from "./Menu.module.css";
import PaginationComponent from "./PaginationComponent";
import MoviesList from "./MoviesList";

export const MoviesPage = async () => {

    return (
        <div className={styles.container}>
        <main className={styles.content}>
            <header className={styles.header}>
                <input
                    type="text"
                    placeholder="Search movie"
                    className={styles.searchBar}
                />
                <button className={styles.searchButton} type={"button"}>
                    Search movie
                </button>
            </header>

            <MoviesList/>


    <PaginationComponent />
    </main>
</div>

    );
};
