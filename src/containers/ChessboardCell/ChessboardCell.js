import React from 'react';

import './ChessboardCell.css';

const chessboardCell = (props) => {

    let piece = 'none';
    let classes = 'ChessboardCell';

    if (props.piece) {
        piece = props.piece.type;
    }
    
    if (props.potentialMove) {
        console.log(props.potentialMove);
        classes += ' Potential';
    }

    if (props.isBlack) {
        classes += ' Black';
    } else {
        classes += ' White';
    }

    if (props.isSelected) {
        classes += ' Selected';
    }

    return (
        <div className={classes}
            onClick={() => props.clicked(props.piece)}>
            {props.x}, {props.y} {piece}
        </div>
    );
};

export default chessboardCell;