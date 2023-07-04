import { useState, useEffect } from 'react';

export type GetPositionState = {
    data: GeolocationPosition | null;
    isLoading: boolean;
    error: Error | null;
}

const getLocation = (geolocation: Geolocation) => {
    return new Promise<GeolocationPosition>((resolve, reject) => {
        geolocation.getCurrentPosition(resolve, reject);
    });
}

const useCurrentGeoPosition = (): GetPositionState => {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getPosition = async () => {
            try {
                if (navigator.geolocation) {
                    const location = await getLocation(navigator.geolocation);
                    setPosition(location);
                } else {
                    throw new Error("Your browser is not geolocation supported.")
                }
                setIsLoading(false);
            } catch (e: any) {
                setError(e);
                setIsLoading(false);
            }
        };
        setIsLoading(true);
        getPosition();
    }, [navigator.geolocation]);

    return { data: position, isLoading, error };
}

export default useCurrentGeoPosition;
