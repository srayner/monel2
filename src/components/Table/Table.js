import React from 'react';
import './Table.css';

const table = (props) => {
    const header = props.data.columns.map(column => {
        return (
            <th key={column.field}>{column.text}</th>
        );
    });
    const rows = props.data.data.map(row => {
        const data = props.data.columns.map(column => {
            return (
                <td key={column.field}>{row[column.field]}</td>
            );
        });
        return (
            <tr key={row.id}>
                {data}
            </tr>
        );
    });

    return (
        <table className="Table">
            <thead>
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default table;