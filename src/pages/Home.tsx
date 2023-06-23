import React from 'react';
import RouteTabs, {Tab} from "../components/RouteTabs/RouteTabs";
import TablePeople from "./TablePeople";
import TablePlanets from "./TablePlanets";

const Home = () => {
    const tabs: Tab[] = [{
        title: 'peoples',
        path: '/home/peoples',
        component: TablePeople,
    },{
        title: 'planets',
        path: '/home/planets',
        component: TablePlanets,
    }];
    return (
        <div>
            <RouteTabs tabs={tabs}/>
        </div>
    );
}

export default Home;
