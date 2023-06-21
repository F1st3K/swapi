import React from 'react';
import './../App.css';
import Table from "./../components/Table/Table";
import InfoPeople, {toTableFormat, Person} from "./../services/PeopleSwapi";

let dataTable: string[][] = [];

const Home = () => {
    const { data, loading } = InfoPeople();
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
            <Table data={dataTable}></Table>
        </div>
    );
}

export default Home;
