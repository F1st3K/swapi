import React from 'react';

export interface PropsData{
    data: string[][];
}


function Table({data}:PropsData) {
    return (
        <div className="Table">
            <table>
                <thead></thead>
                <tbody>
                {
                    data.map((row, i) => {
                        return (
                            <tr key={i}>
                                {
                                    row.map((item, j) => {
                                        return (<td key={j}>{item}</td>)})
                                }
                            </tr>
                        )})
                }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
