import { useState, useEffect } from 'react';

type FetchState = {
    data: any;
    isLoading: boolean;
}

const GetFetchData = (( url: string ): FetchState => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        };
        setIsLoading(true);
        fetchData();
    }, [url]);

    return { data, isLoading };
});

export default GetFetchData;
