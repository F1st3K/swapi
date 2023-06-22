import { ReactElement, useState} from 'react';
import { useLocation, HistoryRouterProps} from 'react-router-dom';
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

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
        const tabUrl = `/${tabId}`;
        if (location.pathname !== tabUrl) {
            window.history.pushState({}, tabUrl);
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
            <div>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-pane fade ${
                            tab.id === activeTab ? "show active" : ""
                        }`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RouteTabs;