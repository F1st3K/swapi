import React, {useState} from 'react';
import './../App.css';
import PagingTable from "../components/PagingTable/PagingTable";
import InfoPeople, {Person, toTableFormat} from "../services/PeopleSwapi";

let dataTable: string[][] = [];

const Home = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    let { data, loading, countPage } = InfoPeople(currentPage);
    const persons: Person[] = data ? data : [];
    dataTable = toTableFormat(persons);

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
                         prevHandler={()=>{ setCurrentPage(currentPage - 1);}}/>
        </div>
    );
}

export default Home;
