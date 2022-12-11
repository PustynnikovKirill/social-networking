import React, {useState} from "react";
import style from "./Paginator.module.css";


type PaginatorType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (pageNumber: number) => void,
    portionSize: number
}

export let Paginator = (props: PaginatorType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber-1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return <div>
        {portionNumber > 1 && <button onClick={()=>setPortionNumber(portionNumber-1)}>PREV</button>}
        {pages
            .filter(p=> p>= leftPortionNumber && p<=rightPortionPageNumber)
            .map(el => {
            return <span className={props.currentPage === el ? style.selectedPage : ""}
                         onClick={(e) => {
                             props.onPageChange(el)
                         }}
            >{el}</span>
        })}
        {portionCount>portionNumber && <button onClick={()=>setPortionNumber(portionNumber+1)}>NEXT</button>}
    </div>

}