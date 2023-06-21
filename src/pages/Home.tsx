import React from 'react';
import './../App.css';
import PagingTable from "../components/PagingTable/PagingTable";
import InfoPeople, {Person, toTableFormat} from "../services/PeopleSwapi";

let dataTable: string[][] = [];

const prevPage = () => {

}

const nextPage = () => {

}

const Home = () => {
    const { data, loading, countPage } = InfoPeople(1);
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
            <PagingTable data={dataTable} countPage={countPage} nextHandler={nextPage} prevHandler={prevPage}/>
        </div>
    );
}

export default Home;
