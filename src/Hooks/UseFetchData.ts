import { useState, useEffect } from 'react';
import {JsonObject, JsonRecord} from "../Types/JsonObject";

type FetchState<T> = {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
}

const useFetchData = <T extends JsonRecord<T>>(url: string ): FetchState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

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

    return { data, isLoading, error };
}

export default useFetchData;
