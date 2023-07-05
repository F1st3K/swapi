import RulePolygon from "./RulePolygon";

export default class Polygon {

    public static MIN_COUNT_POINT: number = 3;

    public readonly PolygonPoints: Array<[number, number]>;

    constructor(points: Array<[number, number]>, rule?: RulePolygon) {
        try {
            if (points.length < Polygon.MIN_COUNT_POINT)
                throw new Error(points.length + " points too small to build a polygon.");
            if (rule)
                rule.CheckOnRule(this);
            this.PolygonPoints = points;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e)
                throw new Error("Error on create polygon: " + e.message);
            throw e;
        }
    }

}