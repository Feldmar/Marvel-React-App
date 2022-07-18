import React, { FC } from "react";

const Pagination: FC<{perPage: any, totalC: any}> = ({perPage, totalC})=>{
    const pageNumbers = [];
    for (let i = 0; i <= Math.ceil(totalC / perPage); i++){
        pageNumbers.push(i)
    }
    return(
    <div>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li className="page-item" key={number}>
                    <a href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    )
}
export default Pagination;