import { useState, useEffect } from 'react';

export type GetPositionState = {
    data: GeolocationPosition | null;
    isLoading: boolean;
    error: Error | null;
}

const useCurrentGeoPosition = (): GetPositionState => {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getPosition = async () => {
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((geoPosition) => {
                        setPosition(geoPosition);
                    });
                } else {
                    alert("Your browser is not geolocation supported.")
                }
                setIsLoading(false);
            } catch (e: any) {
                setError(e);
                setIsLoading(false);
            }
        };
        setIsLoading(true);
        getPosition();
    }, []);

    return { data: position, isLoading, error };
}

export default useCurrentGeoPosition;
