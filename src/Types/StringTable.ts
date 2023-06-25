export type Column = {
    name: string
}

export type Cell = number | string | null;

export type Row = Array<Cell>;

export default class StringTable {
    public readonly Columns: Array<Column>;
    public readonly Rows: Array<Row>;

    constructor(columns: Array<Column>) {
        this.Columns = columns;
        this.Rows = [];
        this.Rows.length = columns.length;
    }
}