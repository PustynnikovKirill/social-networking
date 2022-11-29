import React from "react";
import style from "./Paginator.module.css";


type PaginatorType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (pageNumber: number) => void,
}

export let Paginator = (props: PaginatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(el => {
                return <span className={props.currentPage === el ? style.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChange(el)
                             }}
                >{el}</span>
            })}
        </div>

}