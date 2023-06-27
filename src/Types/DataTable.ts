import {JsonObject, JsonRecord} from "./JsonObject";

export type DataType = string | number | boolean;

export type DataColumn = {
    title: string;
    type: DataType;
}

export type DataRow = Array<DataType>;

export default class DataTable {
    public readonly columns: DataColumn[];
    public readonly rows: DataRow[];

    public static getTableFrom<T extends JsonRecord<T>>(json: Array<JsonObject<T>>) {
        if (json.length <= 0)
            throw new Error("The json is empty");
        const columns: DataColumn[] = Object.keys(json[0]).map((key, i): DataColumn => {
            return {title: key, type: typeof Object.values(json[0]).at(i)}
        });
        const rows: DataRow[] = json.map((entry):DataRow => {
            return Object.values(entry);
        })
        return new DataTable(columns, rows);
    }

    constructor(columns: DataColumn[], rows?: DataRow[]) {
        this.columns = columns;
        this.rows = [];
        if (rows) rows.map((row) => {this.addRow(row)})
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