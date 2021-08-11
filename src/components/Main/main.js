import React from 'react';
import MainData from '../MainData';
import MainSearch from '../MainSearch';
import Pagination from '../Pagination';

export default function Main({ data, dataLendth, dataFilterBtns, pagination, paginationHandler }) {
    return (
        <div className="main">
            <MainSearch dataLendth={dataLendth} dataFilterBtns={dataFilterBtns} />
            {
                data.length ?
                    <MainData data={data} />
                    : null
            }
            {
                pagination.length ?
                    <Pagination pagination={pagination} paginationHandler={paginationHandler} />
                    : null
            }
        </div>
    )
}
