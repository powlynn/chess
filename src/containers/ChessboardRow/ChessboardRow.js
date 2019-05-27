import React from 'react';
import ChessboardCell from './ChessboardCell/ChessboardCell';

const chessboardRow = (props) => (
    <div>
        {props.contents.map(cell => (
            <ChessboardCell
                cellName={cell.contents}
                key={cell.id}/>
        ))}
    </div>
);

export default chessboardRow;