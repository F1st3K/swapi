import Polygon from "./Polygon";

export default class RulePolygon {
    public readonly MaxSquare: number | null;

    constructor(maxSquare?: number) {
        this.MaxSquare = maxSquare ? maxSquare : null;
    }

    public CheckOnRule(polygon: Polygon): void {
        if (this.MaxSquare && polygon.getSquare() > this.MaxSquare)
            throw new Error("Polygon square is equal " + polygon.getSquare()
                + " its more then max square " + this.MaxSquare);
    }
}