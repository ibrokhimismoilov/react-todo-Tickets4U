import React from 'react';

export default function Pagination({paginationHandler, pagination}) {
    return (
        <ul className="pagination">
            <li className="page-item disabled">
                <span className="page-link">{"<"}</span>
            </li>
            {
                pagination.map(item => {
                    return (
                        <li className="page-item" onClick={()=>paginationHandler(item)}>
                            <span className="page-link">{item + 1}</span>
                        </li>
                    )
                })
            }
            <li className="page-item disabled">
                <span className="page-link">{">"}</span>
            </li>
        </ul>
    )
}
