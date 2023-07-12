export type LatLngPoint = [number, number];

export type ValidationRules = {
    maxSquare?: number;
    maxPerimeter?: number;
    maxSide?: number;
}

export type EarthPolygonValidationProps = {
    points: LatLngPoint[];
    rules?: ValidationRules;
}

const EARTH_RADIUS = 6371008.8;

function getRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
}

function calculateDistance(A: LatLngPoint, B: LatLngPoint, radius: number): number {
    const [latA, lngA] = A;
    const [latB, lngB] = B;

    const latR = getRadians(latA - latB);
    const lngR = getRadians(lngA - lngB);

    const temp =
        Math.sin(latR / 2) * Math.sin(latR / 2) +
        Math.cos(getRadians(latA)) *
        Math.cos(getRadians(latB)) *
        Math.sin(lngR / 2) *
        Math.sin(lngR / 2);

    return 2 * Math.atan2(Math.sqrt(temp), Math.sqrt(1 - temp)) * radius;
}

function calculateSquare(points: LatLngPoint[], radius: number){
    let area = 0;
    points.map((point, i) => {
        const [currentLat, currentLng] = point;
        const [nextLat, nextLng] = points[(i + 1) % points.length];

        const partialArea = (
            (getRadians(nextLng) - getRadians(currentLng)) *
            (2 + Math.sin(getRadians(currentLat)) + Math.sin(getRadians(nextLat)))
        )

        area += partialArea;
        return null;
    });
    return Math.abs(area * (radius**2 / 2))
}

const useEarthPolygonValidation = ({points, rules}: EarthPolygonValidationProps): void => {
    try {

    }
    catch (e) {
        if (e && typeof e === 'object' && 'message' in e)
            throw new Error("Failed on validate earth polygon: " + e.message);
        throw e;
    }
}

export default useEarthPolygonValidation;