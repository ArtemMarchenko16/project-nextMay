import React from 'react';
import { SearchComponent } from '@/app/components/moviesComponent/SearchComponent';
import MoviesList from '@/app/components/moviesComponent/MoviesList';
import PaginationComponent from '@/app/components/moviesComponent/PaginationComponent';
import styles from '@/app/components/interface.module.css';

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const params = await searchParams;
    const page: string | string[] = params.page || '1';

    return (
        <div className={styles.container}>
            <main className={styles.content}>
                <div className={styles.header}>
                    <SearchComponent />
                </div>
                <MoviesList page={page} />
                <div className={styles.styleForPagination}>
                    <PaginationComponent currentPage={Number(page)} />


                </div>
            </main>
        </div>
    );
};

export default Page;
