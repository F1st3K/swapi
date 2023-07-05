import RulePolygon from "./RulePolygon";

export default class Polygon {

    public static MIN_COUNT_POINT: number = 3;

    public readonly PolygonPoints: Array<[number, number]>;

    constructor(points: Array<[number, number]>, rule?: RulePolygon) {
        try {
            if (points.length < Polygon.MIN_COUNT_POINT)
                throw new Error(points.length + " points too small to build a polygon.");
            this.PolygonPoints = points;
            if (rule)
                rule.CheckOnRule(this);
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e)
                throw new Error("Error on create polygon: " + e.message);
            throw e;
        }
    }

    public getSquare(): number{
        const length = this.PolygonPoints.length;
        let S: number = 0;
        this.PolygonPoints.map((point, i) => {
            const X: number = point[0];
            const Yprev: number = this.PolygonPoints[i - 1 === -1 ? length - 1 : i - 1][1];
            const Ynext: number = this.PolygonPoints[i + 1 === length ? 0 : i + 1][1];
            S += X * ( Ynext - Yprev );
        });
        S = S / 2;
        S = S < 0 ? -S : S
        return S;
    }

}