import React from 'react';

import classes from './ChessboardCell.css';

const chessboardCell = (props) => (

    <div className={classes.ChessboardCell}>
        {props.cellName}
    </div>
);

export default chessboardCell;