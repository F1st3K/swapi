import EarthPolygon from "./EarthPolygon";

export type PropsRulePolygon = {
    maxSquare?: number;
    maxPerimeter?: number;
    maxSide?: number;
}

export default class RulePolygon {
    public readonly MaxSquare: number | null;
    public readonly MaxPerimeter: number | null;
    public readonly MaxSide: number | null;

    constructor({maxSquare, maxPerimeter, maxSide}: PropsRulePolygon) {
        this.MaxSquare = maxSquare || null;
        this.MaxPerimeter = maxPerimeter || null;
        this.MaxSide = maxSide || null;
    }

    public CheckOnRule(polygon: EarthPolygon): void {
        if (this.MaxSquare && polygon.getSquare() > this.MaxSquare)
            throw new Error("Polygon square is equal " + polygon.getSquare()
                + " its more then max square " + this.MaxSquare);

        if (this.MaxPerimeter && polygon.getPerimeter() > this.MaxPerimeter)
            throw new Error("Polygon perimeter is equal " + polygon.getPerimeter()
                + " its more then max perimeter " + this.MaxPerimeter);

        if (this.MaxSide && polygon.getMaxSide() > this.MaxSide)
            throw new Error("Polygon side is equal " + polygon.getMaxSide()
                + " its more then max side " + this.MaxSide);
    }
}