'use client';
import React from 'react';
import {Pagination} from "@mui/material";
import {useRouter} from "next/navigation";

type PaginationProps = {
    query?: string;
    currentPage: number;
    totalPages?: number;
};

const PaginationComponent = ({ query = "", currentPage, totalPages }: PaginationProps) => {
    const router = useRouter();

    const handlePageChange = (event, page) => {
        const url = query ? `/search?query=${query}&page=${page}` : `?page=${page}`;
        router.push(url);
    };

    const isSearch = Boolean(query);

    return (
        <div>
            <Pagination
                count={totalPages || 500}
                color="primary"
                onChange={handlePageChange}
                page={currentPage}
                disabled={isSearch && totalPages === 0}
            />
        </div>
    );
};

export default PaginationComponent;