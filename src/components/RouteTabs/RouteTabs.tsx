import React, { useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

export interface Tab {
    title: string;
    path: string;
    component: React.FC;
}

interface Props {
    tabs: Tab[];
}

const Tabs: React.FC<Props> = ({ tabs }) => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(location.pathname);

    const handleTabClick = (path: string) => {
        setActiveTab(path);
    };

    return (
        <div>
            <div>
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        onClick={() => handleTabClick(tab.path)}
                    >
                        {tab.title}
                    </NavLink>
                ))}
            </div>
            <Routes>
                {tabs.map((tab) => (
                    <Route key={tab.path} path={tab.path} Component={tab.component} />
                ))}
            </Routes>
        </div>
    );
};

export default Tabs;