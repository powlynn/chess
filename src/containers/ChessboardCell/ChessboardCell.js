import React from 'react';
import './ChessboardCell.css';

import blackPawn from './../../assets/images/black-pawn.png';
import blackKnight from './../../assets/images/black-knight.png';
import blackRook from './../../assets/images/black-rook.png';
import blackBishop from './../../assets/images/black-bishop.png';
import blackQueen from './../../assets/images/black-queen.png';
import blackKing from './../../assets/images/black-king.png';

const chessboardCell = (props) => {

    let piece = 'none';
    let classes = 'ChessboardCell';
    let color = '';
    let img = '';

    if (props.piece) {
        piece = props.piece.type;

        if (props.piece.isBlack) {
            color = 'black';

            if (piece === 'pawn') {
                img = <img src={blackPawn} className="pawn-img"/>
            } else if (piece === 'knight') {
                img = <img src={blackKnight}/>
            } else if (piece === 'rook') {
                img = <img src={blackRook} className="rook-img"/>
            } else if (piece === 'bishop') {
                img = <img src={blackBishop}/>
            } else if (piece === 'queen') {
                img = <img src={blackQueen} className="queen-img"/>
            } else if (piece === 'king') {
                img = <img src={blackKing} className="king-img"/>
            }
        } else {
            color = 'white';
        }
    }
    
    if (props.potentialMove) {
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
            onClick={() => props.clicked(props.piece, props.potentialMove)}>
            {img}
        </div>
    );
};

export default chessboardCell;