import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
    border: 6px solid black;
    border-collapse: collapse;
    background-color: rgba(74, 74, 74);

    &:hover {
        cursor: pointer;
    }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
    &:nth-child(3),
    :nth-child(6) {
        border-bottom: 6px solid black;
    }
`;

const TableData = styled.td`
    width: 50px;
    height: 50px;
    font-size: 2.5em;
    text-align: center;
    vertical-align: middle;
    color: #bcbcbc;
    border: 2px solid black;

    &:nth-child(3),
    :nth-child(6) {
        border-right: 6px solid black;
    }

    /* &:hover {
        background-color: #0f49cb;
    } */
`;

const TableRowComp = ({ children, ...props }) => {
    return <TableRow>{children}</TableRow>;
};

const TDState = styled.div`
    ${({ hoverActive }) => hoverActive && "background-color: #0f49cb;"}
`;

const TableDataState = ({ hoverActive, children, ...props }) => {
    return (
        <TDState>
            { children }
            {hoverActive && "-"}
        </TDState>
    );
};

const TableDataComp = ({ children, pos, ...props }) => {
    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
    };

    const handleMouseOut = () => {
        setActive(false);
    };

    return (
        <TableData onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <TableDataState hoverActive={active}>{children}</TableDataState>
        </TableData>
    );
};

const Grid = ({ data, ...props }) => {
    const [table, setTable] = useState(null);

    useEffect(() => {
        setTable(
            data.map((row, index) => (
                <TableRowComp key={index}>
                    {row.map((cell, cIndex) => {
                        return (
                            <TableDataComp key={cIndex} pos={cell.pos}>{cell.value}</TableDataComp>
                        );
                    })}
                </TableRowComp>
            ))
        );
    }, [data]);

    return (
        <Table>
            <TableBody>{table}</TableBody>
        </Table>
    );
};

export default Grid;
