export type LatLngPoint = [number, number];


export default class EarthPolygon{
    public static readonly EarthRadius = 6371;

    public static getRadians(degrees: number): number {
        return (degrees * Math.PI) / 180;
    }

    public static calculateDistance(A: LatLngPoint, B: LatLngPoint, radius: number): number {
        const [latA, lngA] = A;
        const [latB, lngB] = B;

        const latR = this.getRadians(latA - latB);
        const lngR = this.getRadians(lngA - lngB);

        const temp =
            Math.sin(latR / 2) * Math.sin(latR / 2) +
            Math.cos(this.getRadians(latA)) *
            Math.cos(this.getRadians(latB)) *
            Math.sin(lngR / 2) *
            Math.sin(lngR / 2);

        const result = 2 * Math.atan2(Math.sqrt(temp), Math.sqrt(1 - temp)) * radius;

        return result;
    }


    public readonly Points: LatLngPoint[];

    constructor(points: LatLngPoint[]) {
        this.Points = points;
    }

    public getSquare(): number {
        const numPoints = this.Points.length;
        let area = 0;
        const earthRadius = 6371008.8;

        for (let i = 0; i < numPoints; i++) {
            const [currentLat, currentLng] = this.Points[i];
            const [nextLat, nextLng] = this.Points[(i + 1) % numPoints];

            const partialArea = (
                (EarthPolygon.getRadians(nextLng) - EarthPolygon.getRadians(currentLng)) *
                (2 + Math.sin(EarthPolygon.getRadians(currentLat)) + Math.sin(EarthPolygon.getRadians(nextLat)))
            )

            area += partialArea;
        }

        area *= (earthRadius * earthRadius / 2)
        area = Math.abs(area);
        area /= 1000;
        return area;
    }

    public getPerimeter(): number {
        let P = 0;
        this.Points.map((point, i) => {
            const nextPoint = i === this.Points.length - 1 ? this.Points[0] : this.Points[i + 1];
           P += EarthPolygon.calculateDistance(point, nextPoint, EarthPolygon.EarthRadius);
           return null;
        });
        return P;
    }

    public getMaxSide(): number {
        let maxSide = 0;
        this.Points.map((point, i) => {
            const nextPoint = i === this.Points.length - 1 ? this.Points[0] : this.Points[i + 1];
            const currentSide= EarthPolygon.calculateDistance(point, nextPoint, EarthPolygon.EarthRadius);
            maxSide = currentSide > maxSide ? currentSide : maxSide;
            return null;
        });
        return maxSide;
    }
}