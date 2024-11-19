'use client'

import React from 'react';
import styles from "@/app/components/Menu.module.css";

const PaginationComponent = () => {

    // const [query, setQuery]  = useSearchParams({page:"1"});
    //
    //
    // let onclickPrevUsers = () => {
    //     let page = query.get("page");
    //     if(page && +page > 0) {
    //         let currentPage = +page;
    //         currentPage--;
    //         setQuery({page: currentPage.toString()})
    //     }
    // }
    // let onclickNextUsers = () => {
    //     let page = query.get("page");
    //     if(page) {
    //         let currentPage = +page;
    //         currentPage++;
    //         setQuery({page: currentPage.toString()})
    //     }
    // }
    return (
        <div>
            <footer className={styles.pagination}>
                <button
                    className={`${styles.paginationButton} `}
                    // onClick={onclickPrevUsers}
                    // disabled={query === 1}
                >
                    Prev page
                </button>
                {/*<span className={styles.pageNumber}>{query}</span>*/}
                <button
                   //  className={styles.paginationButton}
                   // onClick={onclickNextUsers}
                >
                    Next page
                </button>
            </footer>
        </div>
    );
};

export default PaginationComponent;