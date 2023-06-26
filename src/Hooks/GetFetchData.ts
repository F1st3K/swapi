import {useEffect, useState} from "react";

const GetFetchData = ((url: string): { data: any } => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return {data};
});