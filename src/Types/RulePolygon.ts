import Polygon from "./Polygon";

export type PropsRulePolygon = {
    maxSquare?: number;
    maxSide?: number;
}

export default class RulePolygon {
    public readonly MaxSquare: number | null;
    public readonly MaxSide: number | null;

    constructor({maxSquare, maxSide}: PropsRulePolygon) {
        this.MaxSquare = maxSquare ? maxSquare : null;
        this.MaxSide = maxSide ? maxSide : null;
    }

    public CheckOnRule(polygon: Polygon): void {
        if (this.MaxSquare && polygon.getSquare() > this.MaxSquare)
            throw new Error("Polygon square is equal " + polygon.getSquare()
                + " its more then max square " + this.MaxSquare);
        if (this.MaxSide && polygon.getMaxPolygonSide() > this.MaxSide)
            throw new Error("Polygon side is equal " + polygon.getMaxPolygonSide()
                + " its more then max side " + this.MaxSide);
    }
}