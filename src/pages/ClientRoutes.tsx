import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import RouteTabs, {Tab} from "../components/RouteTabs/RouteTabs";
import TablePeople from "./TablePeople";
import TablePlanets from "./TablePlanets";

function ClientRoutes() {
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
            <Routes>
                <Route path='/home/' Component={Home}/>
            </Routes>
            <RouteTabs tabs={tabs}/>
        </div>
    );
}

export default ClientRoutes;
