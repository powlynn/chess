import React, {Component} from 'react';
import ChessboardRow from './../../containers/ChessboardRow/ChessboardRow';
import classes from './Chessboard.css';

class Chessboard extends Component {


    state = {
        board: [
            {
                id: 1,
                contents: [
                    {id: 1, contents: 'wr1'},
                    {id: 2, contents: 'wk1'}, 
                    {id: 3, contents: 'wb1'},
                    {id: 4, contents: 'wk'},
                    {id: 5, contents: 'wq'},
                    {id: 6, contents: 'wb2'},
                    {id: 7, contents: 'wk2'},
                    {id: 8, contents: 'wr2'}
                ]
            },
            {
                id: 2,
                contents: [
                    {id: 1, contents: 'wr1'},
                    {id: 2, contents: 'wk1'}, 
                    {id: 3, contents: 'wb1'},
                    {id: 4, contents: 'wk'},
                    {id: 5, contents: 'wq'},
                    {id: 6, contents: 'wb2'},
                    {id: 7, contents: 'wk2'},
                    {id: 8, contents: 'wr2'}
                ]
            },
            {
                id: 3,
                contents: [
                    {id: 1, contents: ''},
                    {id: 2, contents: ''}, 
                    {id: 3, contents: ''},
                    {id: 4, contents: ''},
                    {id: 5, contents: ''},
                    {id: 6, contents: ''},
                    {id: 7, contents: ''},
                    {id: 8, contents: ''}
                ]
            },
            {
                id: 4,
                contents: [
                    {id: 1, contents: ''},
                    {id: 2, contents: ''}, 
                    {id: 3, contents: ''},
                    {id: 4, contents: ''},
                    {id: 5, contents: ''},
                    {id: 6, contents: ''},
                    {id: 7, contents: ''},
                    {id: 8, contents: ''}
                ]
            },
            {
                id: 5,
                contents: [
                    {id: 1, contents: ''},
                    {id: 2, contents: ''}, 
                    {id: 3, contents: ''},
                    {id: 4, contents: ''},
                    {id: 5, contents: ''},
                    {id: 6, contents: ''},
                    {id: 7, contents: ''},
                    {id: 8, contents: ''}
                ]
            },
            {
                id: 6,
                contents: [
                    {id: 1, contents: ''},
                    {id: 2, contents: ''}, 
                    {id: 3, contents: ''},
                    {id: 4, contents: ''},
                    {id: 5, contents: ''},
                    {id: 6, contents: ''},
                    {id: 7, contents: ''},
                    {id: 8, contents: ''}
                ]
            },
            {
                id: 7,
                contents: [
                    {id: 1, contents: 'bp1'},
                    {id: 2, contents: 'bp2'}, 
                    {id: 3, contents: 'bp3'},
                    {id: 4, contents: 'bp4'},
                    {id: 5, contents: 'bp5'},
                    {id: 6, contents: 'bp6'},
                    {id: 7, contents: 'bp7'},
                    {id: 8, contents: 'bp8'}
                ]
            },
            {
                id: 8,
                contents: [
                    {id: 1, contents: 'br1'},
                    {id: 2, contents: 'bk1'}, 
                    {id: 3, contents: 'bb1'},
                    {id: 4, contents: 'bk'},
                    {id: 5, contents: 'bq'},
                    {id: 6, contents: 'bb2'},
                    {id: 7, contents: 'bk2'},
                    {id: 8, contents: 'br2'}
                ]
            }
        ]
    }

    render() {
        
        return (
            <div className={classes.Chessboard}>
                {this.state.board.map(row => (
                    <ChessboardRow 
                        key={row.id}
                        contents={row.contents}/>
                ))}
            </div>
        )
    }

}

export default Chessboard;