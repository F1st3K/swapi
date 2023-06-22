import React from 'react';
import RouteTabs, {Tab} from "../components/RouteTabs/RouteTabs";
import TablePeople from "./TablePeople";

const Home = () => {
    const tabs: Tab[] = [{
        title: 'd',
        path: '/home/d',
        component: TablePeople,
    }];
    return (
        <div>
            <RouteTabs tabs={tabs}/>
        </div>
    );
}

export default Home;
