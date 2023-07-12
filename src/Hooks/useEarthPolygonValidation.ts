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

function getDistance(A: LatLngPoint, B: LatLngPoint, radius: number): number {
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

function getSquare(points: LatLngPoint[], radius: number): number {
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

function getPerimeter(points: LatLngPoint[], radius: number): number {
    let perimeter = 0;
    points.map((point, i) => {
        const nextPoint = points[(i + 1) % points.length];
        perimeter += getDistance(point, nextPoint, radius);
        return null;
    });
    return perimeter;
}

function getMaxSide(points: LatLngPoint[], radius: number): number {
    let maxSide = 0;
    points.map((point, i) => {
        const nextPoint = points[(i + 1) % points.length];
        const currentSide= getDistance(point, nextPoint, radius);
        maxSide = currentSide > maxSide ? currentSide : maxSide;
        return null;
    });
    return maxSide;
}

const useEarthPolygonValidation = ({points, rules = {}}: EarthPolygonValidationProps): void => {
    try {
        if (rules.maxSquare && getSquare(points, EARTH_RADIUS) > rules.maxSquare)
            throw new Error("Polygon square is equal " + getSquare(points, EARTH_RADIUS)
                + " its more then max square " + rules.maxSquare);

        if (rules.maxPerimeter && getPerimeter(points, EARTH_RADIUS) > rules.maxPerimeter)
            throw new Error("Polygon perimeter is equal " + getPerimeter(points, EARTH_RADIUS)
                + " its more then max perimeter " + rules.maxPerimeter);

        if (rules.maxSide && getMaxSide(points, EARTH_RADIUS) > rules.maxSide)
            throw new Error("Polygon side is equal " + getMaxSide(points, EARTH_RADIUS)
                + " its more then max side " + rules.maxSide);
    }
    catch (e) {
        if (e && typeof e === 'object' && 'message' in e)
            throw new Error("Failed on validate earth polygon: " + e.message);
        throw e;
    }
}

export default useEarthPolygonValidation;