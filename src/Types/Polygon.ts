import RulePolygon from "./RulePolygon";

export type Point = [number, number];

export default class Polygon {
    public readonly PolygonPoints: Array<Point>;
    public readonly Rule: RulePolygon | null;

    constructor(points: Array<Point>, rule?: RulePolygon) {
        try {
            this.PolygonPoints = points;
            this.Rule = rule || null;
            this.Rule?.CheckOnRule(this);
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e)
                throw new Error("Error on create polygon: " + e.message);
            throw e;
        }
    }

    public getSquare(): number {
        const length = this.PolygonPoints.length;
        let S: number = 0;
        this.PolygonPoints.map((point, i) => {
            const X: number = point[0];
            const Yprev: number = this.PolygonPoints[i - 1 === -1 ? length - 1 : i - 1][1];
            const Ynext: number = this.PolygonPoints[i + 1 === length ? 0 : i + 1][1];
            S += X * (Ynext - Yprev);
            return null;
        });
        S /= 2;
        S = S < 0 ? -S : S;
        return S;
    }

    public getPerimeter(): number {
        const length = this.PolygonPoints.length;
        let P: number = 0;
        this.PolygonPoints.map((point, i) => {
            const X = point[0];
            const Y = point[1];
            const Xnext = this.PolygonPoints[i + 1 === length ? 0 : i + 1][0];
            const Ynext = this.PolygonPoints[i + 1 === length ? 0 : i + 1][1];
            P += (Xnext - X)**2 + (Ynext - Y)**2;
            return null;
        })
        P **= (1/2);
        return P;
    }

    public getMaxPolygonSide(): number {
        const length = this.PolygonPoints.length;
        let maxSide: number = 0;
        this.PolygonPoints.map((point, i) => {
            const X = point[0];
            const Y = point[1];
            const Xnext = this.PolygonPoints[i + 1 === length ? 0 : i + 1][0];
            const Ynext = this.PolygonPoints[i + 1 === length ? 0 : i + 1][1];
            const currentSide = (Xnext - X)**2 + (Ynext - Y)**2;
            maxSide = currentSide > maxSide ? currentSide : maxSide;
            return null;
        })
        maxSide **= (1/2);
        return maxSide;
    }
}