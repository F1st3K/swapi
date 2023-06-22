import { ReactElement, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from '../Button/Button';

export interface Tab {
    id: number,
    label: string,
    content: ReactElement,
}

interface TabsProps {
    tabs: Tab[],
}

const RouteTabs = ({ tabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const location = useLocation();
    const navigate = useNavigate();

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
        const tabUrl = `/${tabId}`;
        if (location.pathname !== tabUrl) {
            navigate(tabUrl);
        }
    };

    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

    return (
        <div>
            <ul>
                {tabs.map((tab) => (
                    <li key={tab.id}>
                        <Button
                            text={tab.label}
                            onClick={() => handleTabClick(tab.id)}
                        />

                    </li>
                ))}
            </ul>
                <div key={tabs[activeTabIndex].id}>
                    {tabs[activeTabIndex].content}
                </div>
        </div>
    );
};

export default RouteTabs;