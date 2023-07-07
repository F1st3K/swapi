import React from 'react';

export interface PropsData{
    data: string[][];
}


function Table({data}:PropsData) {
    return (
        <div className="Table">
            <table>
                <thead>
                {
                    <tr key={0}>
                        {
                            data[0].map((item, i) => {
                                return (<td key={i}>{item}</td>)})
                        }
                    </tr>
                }
                </thead>
                <tbody>
                {
                    data.map((row, i ) => {
                        if (i === 0)
                            return (<></>);
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
