import React, {useState} from 'react';
import Button from "../Button/Button";
import Table from "../Table/Table";

interface PropsData{
    data: string[][]
    countPage: number,
    prevHandler: () => void,
    nextHandler: () => void,
}

const PagingTable = ({data, countPage, prevHandler, nextHandler}:PropsData) => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    return (
        <div>
            <Table data={data}/>
            {
                currentPage > 1 ? (
                    <Button
                        onClick={() => { setCurrentPage(currentPage - 1); prevHandler() }}
                        text={(currentPage - 1).toString()}/>
                ):(<></>)
            }
            <p>{currentPage}</p>
            {
                currentPage < countPage ? (
                    <Button
                        onClick={() => { setCurrentPage(currentPage + 1); nextHandler() }}
                        text={(currentPage + 1).toString()}/>
                ):(<></>)
            }
        </div>
    );
}

export default PagingTable;
