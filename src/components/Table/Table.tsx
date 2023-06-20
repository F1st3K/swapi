import React from 'react';

interface PropsData{
    data: string[][];
}


function Table({data}:PropsData) {
    return (
        <div className="Table">
            <table>
                {
                    data.map((row, i) => {
                        return (
                            <tr>
                                {
                                    row.map((item, i) => {
                                        return (<td>{item}</td>)})
                                }
                            </tr>
                        )})
                }
            </table>
        </div>
    );
}

export default Table;
