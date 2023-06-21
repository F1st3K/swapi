import React from 'react';
import Button from "../Button/Button";
import Table from "../Table/Table";

interface PropsData{
    data: string[][]
    countPage: number,
    currentPage: number,
    prevHandler: () => void,
    nextHandler: () => void,
}

const PagingTable = ({data, countPage, currentPage, prevHandler, nextHandler}:PropsData) => {

    return (
        <div>
            <Table data={data}/>
            {
                currentPage > 1 ? (
                    <Button
                        onClick={() => {  prevHandler(); currentPage --; }}
                        text={(currentPage - 1).toString()}/>
                ):(<></>)
            }
            <p>{currentPage}</p>
            {
                currentPage < countPage ? (
                    <Button
                        onClick={() => {  nextHandler(); currentPage++; }}
                        text={(currentPage + 1).toString()}/>
                ):(<></>)
            }
        </div>
    );
}

export default PagingTable;
