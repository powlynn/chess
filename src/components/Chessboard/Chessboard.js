import React, {Component} from 'react';

import ChessboardCell from './../../containers/ChessboardCell/ChessboardCell';
import './Chessboard.css';

class Chessboard extends Component {

    // the state object; each move is included in the state,
    // as well as each chess piece
    state = {
        turn: 'white',
        potentialMoves: [],
        selectedId: -1,
        whitePieces: [
            {
                id: 1,
                type: 'rook',
                positionX: 0,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 2,
                type: 'knight',
                positionX: 1,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 3,
                type: 'bishop',
                positionX: 2,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 4,
                type: 'queen',
                positionX: 3,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 5,
                type: 'king',
                positionX: 4,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 6,
                type: 'bishop',
                positionX: 5,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 7,
                type: 'knight',
                positionX: 6,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 8,
                type: 'rook',
                positionX: 7,
                positionY: 0,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 9,
                type: 'pawn',
                positionX: 0,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 10,
                type: 'pawn',
                positionX: 1,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 11,
                type: 'pawn',
                positionX: 2,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 12,
                type: 'pawn',
                positionX: 3,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 13,
                type: 'pawn',
                positionX: 4,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 14,
                type: 'pawn',
                positionX: 5,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 15,
                type: 'pawn',
                positionX: 6,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 16,
                type: 'pawn',
                positionX: 7,
                positionY: 1,
                isSelected: false,
                isDisposed: false,
            }
        ],
        blackPieces: [
            {
                id: 17,
                type: 'pawn',
                positionX: 0,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 18,
                type: 'pawn',
                positionX: 1,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 19,
                type: 'pawn',
                positionX: 2,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 20,
                type: 'pawn',
                positionX: 3,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 21,
                type: 'pawn',
                positionX: 4,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 22,
                type: 'pawn',
                positionX: 5,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 23,
                type: 'pawn',
                positionX: 6,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 24,
                type: 'pawn',
                positionX: 7,
                positionY: 6,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 25,
                type: 'rook',
                positionX: 0,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 26,
                type: 'knight',
                positionX: 1,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 27,
                type: 'bishop',
                positionX: 2,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 28,
                type: 'queen',
                positionX: 3,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 29,
                type: 'king',
                positionX: 4,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 30,
                type: 'bishop',
                positionX: 5,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 31,
                type: 'knight',
                positionX: 6,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            },
            {
                id: 32,
                type: 'rook',
                positionX: 7,
                positionY: 7,
                isSelected: false,
                isDisposed: false,
            }
        ]
    }

    /// Below are the moves of all the different types of pieces on the chessboard.
    /// Each move object has an x and a y; relative to the pieces current position.
    /// The specified amount of spaces a piece can move in the given direction is explicitly stated,
    /// unless it is 99 or -99, in which case the piece can move "indefinitly" in that direction,
    /// until it hits another piece.
    /// Positive X/Y is to the left or forward; Negative X/Y is to the right or backward.
    pawnMoves = [
        { x: 0, y: 1},
        { x: 0, y: -1}
    ];

    knightMoves = [
        { x: 2, y: 1 },
        { x: 2, y: -1 },
        { x: 1, y: 2 },
        { x: -1, y: 2 },
        { x: -1, y: -2 },
        { x: -2, y: 1 },
        { x: -2, y: -1 },
        { x: 1, y: -2 }
    ];

    rookMoves = [
        { x: 0, y: 99 },
        { x: 99, y: 0 },
        { x: -99, y: 0 },
        { x: 0, y: -99 }
    ];

    bishopMoves =  [
        { x: 99, y: 99 },
        { x: -99, y: 99 },
        { x: -99, y: -99 },
        { x: 99, y: -99 }
    ];

    queenMoves = [
        { x: 99, y: 99 },
        { x: -99, y: 99 },
        { x: -99, y: -99 },
        { x: 99, y: -99 },
        { x: 0, y: 99 },
        { x: 99, y: 0 },
        { x: -99, y: 0 },
        { x: 0, y: -99 }
    ];

    kingMoves = [
        { x: 1, y: 1 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: -1, y: 1 },
        { x: -1, y: -1 }
    ];

    moveIsWithinRange = (move) => {
        return -1 < move.x < 9 &&
            -1 < move.y < -9;
    }

    // handler for when a piece is clicked,
    // will display potential moves for piece passed in
    pieceClicked = (piece, potentialMove) => {

        if (piece) {
            // set selectedId on state
            this.setState({selectedId: piece.id});

            // find piece in either black or white,
            // if it's a white piece, where going down the board. This is imporant
            // for pieces that can't move backwards (pawns)
            let goingDownTheBoard = false;

            let findInWhite = this.state.whitePieces.filter(x => x.id === piece.id)[0];

            if (findInWhite) {
                goingDownTheBoard = true;
            } 

            let moves = [];

            // get potential moves based on piece type
            if (piece.type === 'pawn') {
                moves = this.pawnMoves;
            } else if (piece.type === 'knight') {
                moves = this.knightMoves;
            } else if (piece.type === 'rook') {
                moves = this.rookMoves;
            } else if (piece.type === 'bishop') {
                moves = this.bishopMoves;
            } else if (piece.type === 'king') {
                moves = this.kingMoves;
            } else if (piece.type === 'queen') {
                moves = this.queenMoves;
            }
                            
            // get potential moves
            let potentialMoves = [];

            // loop through each of the moves provided, adding the x/y coordinates
            // of the move to the x/y coordinates of the piece
            for(let m of moves) {

                let moveX = piece.positionX + m.x;
                let moveY = piece.positionY + m.y;

                const move = {
                    x: moveX,
                    y: moveY
                }

                if (piece.type === 'bishop') {
                    // down and to the right
                    let j = piece.positionY;

                    // special case for bishop
                    for(let i = piece.positionX; i < 8; i++) {
                        potentialMoves.push({
                            x: i,
                            y: j
                        });
                        j++;
                    }

                    // down and to the left
                    let k = piece.positionX;

                    for(let i = piece.positionY; i < 8; i++) {
                        potentialMoves.push({
                            x: k,
                            y: i
                        });
                        k--;
                    }

                    // up and to the right
                    j = piece.positionY;

                    for(let i = piece.positionX; i < 8; i++) {
                        potentialMoves.push({
                            x: i,
                            y: j
                        });
                        j--;
                    }

                    // up and to the left
                    k = piece.positionX;

                    for(let i = piece.positionY; i > -1; i--) {
                        potentialMoves.push({
                            x: k,
                            y: i
                        });
                        k--;
                    }

                } else if (piece.type === 'pawn') {
                    // special case for pawns
                    if (goingDownTheBoard) {
                        // only include higher-number y's for potential moves if a white piece
                        if (move.y > piece.positionY) {
                            potentialMoves.push(move);
                        }

                    } else {
                        // only include lower-number y's for potential moves if a black piece
                        if (move.y < piece.positionY) {
                            potentialMoves.push(move);
                        }

                    }

                } else {

                    // if either x or y are greater than 90, select all 0-7 for that orientation
                    if (moveX > 90 || moveY > 90) {
                        if (moveX > 90) {
                            for(let i = 0; i < 8; i++) {
                                potentialMoves.push({
                                    x: i,
                                    y: moveY,
                                })
                            }
                        }

                        if (moveY > 90) {
                            for(let i = 0; i < 8; i++) {
                                potentialMoves.push({
                                    x: moveX,
                                    y: i,
                                })
                            }
                        }
                    } else {
                        potentialMoves.push(move);
                    }
                }
                
            }

            // set new potentialMoves state and set piece as selected
            this.setState({potentialMoves: potentialMoves});
            
        } else if (potentialMove) {

            // enter this block if the user clicked on a blue potential move square
            const pieceId = this.state.selectedId;

            // find the piece in the white pieces, if not there then the black pieces
            let findPiece = this.state.whitePieces.filter(x => x.id === pieceId)[0];

            if (!findPiece) {
                findPiece = this.state.blackPieces.filter(x => x.id === pieceId)[0];
            }

            // set its new positions
            findPiece.positionX = potentialMove.x;
            findPiece.positionY = potentialMove.y; 

            // update state
            let blackPiecesCopy = [...this.state.blackPieces];
            
            blackPiecesCopy.splice(blackPiecesCopy.indexOf(findPiece), 1);
            blackPiecesCopy.push(findPiece);

            this.setState({blackPieces: blackPiecesCopy});
            this.setState({selectedId: null});
        }

    }

    render() {

        let board = [];

        let isBlack = false;

        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {

                // have to give the chessboardCell component an id so here
                let id = y.toString() + x.toString();

                // get the piece at this position
                let findPiece = this.state.whitePieces
                    .filter(p => p.positionX === x 
                        && p.positionY === y)[0];
                        
                if (!findPiece) {
                    findPiece = this.state.blackPieces
                        .filter(p => p.positionX === x 
                            && p.positionY === y)[0];
                    
                    if (findPiece) {
                        findPiece.isBlack = true;
                    }
                } else {
                    findPiece.isBlack = false;
                }

                // get the potential moves for this piece
                let findPotentialMove = this.state.potentialMoves.filter(m => m.x === x && m.y === y)[0];

                let selected = false;

                if (findPiece && this.state.selectedId === findPiece.id) {
                    selected = true;
                }

                let cell = <ChessboardCell 
                    x={x}
                    y={y}
                    piece={findPiece}
                    key={id}
                    potentialMove={findPotentialMove}
                    isBlack={isBlack}
                    isSelected={selected}
                    clicked={this.pieceClicked}/>

                board.push(cell);

                // alternate each cell black/white
                // (EXCEPT the last cell in each row)
                if (x != 7) {
                    isBlack = !isBlack;
                }
            }
        }

        return (
            <div className="Chessboard">
                {board}
            </div>
        )
    }

}

export default Chessboard;