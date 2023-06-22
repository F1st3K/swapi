import React, {useState} from "react";
import InfoPeople, {toTableFormat} from "../services/PeopleSwapi";
import PagingTable from "../components/PagingTable/PagingTable";

const TablePeople = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, loading, countPage } = InfoPeople(currentPage);
    const dataTable = toTableFormat(data ? data : []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!data) {
        return <div>No data available</div>;
    }
    return (
        <div>
            <PagingTable data={dataTable} countPage={countPage/10} currentPage={currentPage}
                         nextHandler={()=>{ setCurrentPage(currentPage + 1);}}
                         prevHandler={()=>{ setCurrentPage(currentPage - 1);}}
            />
        </div>
    );
}

export default TablePeople;