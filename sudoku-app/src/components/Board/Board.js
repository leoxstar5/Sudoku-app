import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Grid from "./Grid/Grid";
import MessageBar from "./MessageBar";

const Container = styled.div`
    display: inline-block;
    border: 6px solid #b1b1b1;
    border-radius: 12px;
    padding: 8px;
`;

class cell {
    constructor(value = Math.floor(Math.random() * 10), pos = { x: 0, y: 0 }, active = false) {
        this.value = value;
        this.pos = { x: pos.x, y: pos.y };
        this.active = active;
    }
}

// const changeCell = (pos, change, data) =>
// {
//     let tempData = data.filter(row => row.filter(cell => {
//         if(cell.pos.x === pos.x && cell.pos.y === pos.y)
//             return new cell(undefined, pos, true);
//         return cell;
//     }))
// }

const Board = () => {
    // const data = [
    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],
    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],
    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],

    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],
    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],
    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],

    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],
    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],
    //     [3, 4, 7, 3, 4, 7, 3, 4, 7],
    // ];

    const [data, setData] = useState([]);

    useEffect(() => {
        let row = [];
        let dataTemp = [];

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                row.push(new cell(undefined, { x: i, y: j }));
            }
            dataTemp.push(row);
            row = [];
        }

        // console.log(data);
        setData(dataTemp);
        dataTemp = [];
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <Container>
            <MessageBar />
            <Grid data={data} />
        </Container>
    );
};

export default Board;
