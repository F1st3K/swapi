import React, {useState} from 'react';
import './../App.css';
import PagingTable from "../components/PagingTable/PagingTable";
import InfoPeople, {toTableFormat} from "../services/PeopleSwapi";
import RouteTabs, {Tab} from "../components/RouteTabs/RouteTabs";

let dataTable: string[][] = [];

const Home = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    let { data, loading, countPage } = InfoPeople(currentPage);
    const persons = data ? data : [];
    dataTable = toTableFormat(persons);
    const tab: Tab = {
        id: 1,
        label: 'd',
        content: <div></div>
    }
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
            <RouteTabs tabs={[tab]}/>
        </div>
    );
}

export default Home;
