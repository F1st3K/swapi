export type DataType = string | number | boolean;

export type DataColumn = {
    title: string;
    type: DataType;
}

export type DataRow = Array<DataType>;

export default class DataTable {
    public readonly columns: DataColumn[];
    public readonly rows: DataRow[];

    constructor(columns: DataColumn[], rows?: DataRow[]) {
        this.columns = columns;
        if (rows) this.rows = rows;
        else this.rows = [];
    }

    addRow(values: DataRow) {
        if (values.length !== this.columns.length)
            throw new Error("The number of values does not match the number of columns.");

        for (let i = 0; i < values.length; i++) {
            const colTitle = this.columns[i].title;
            const colType = this.columns[i].type;
            const val = values[i];
            if (typeof val !== colType)
                throw new Error(`The type of value ${val} does not match the type of column '${colTitle}'.`);
        }
        this.rows.push(values);
    }

    deleteRow(rowIndex: number) {
        this.rows.splice(rowIndex, 1);
    }
}