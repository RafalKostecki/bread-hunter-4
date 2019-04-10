import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { setBoardStartPos, changeBoardMatrix } from '../../redux/actions/gameActions';



let boardSwitch = true;
export const setStartPosition = (clear=false) => {
    if (clear) boardSwitch = true;
    if (!boardSwitch) return;

    const boardWindow = document.getElementById("boardWindow");
    const boardWindowStyles = window.getComputedStyle(boardWindow);
    const boardWindowWidth = parseInt(boardWindowStyles.getPropertyValue('width'));
    const boardWindowHeight = parseInt(boardWindowStyles.getPropertyValue('height'));
    const boardWidth = gameConfig.boardSize.x*gameConfig.boardFieldSize;
    const boardHeight = gameConfig.boardSize.y*gameConfig.boardFieldSize;
    const top = (boardWindowHeight - boardHeight) / 2;
    const left = (boardWindowWidth - boardWidth) / 2;

    store.dispatch(setBoardStartPos({top: top, left: left}));
    boardSwitch = false;
}


export const clearBoard = () => {
    const boardMatrix = store.getState().game.board.matrix.map((row, rowIndex) => {
        return row.map((field, fieldIndex) => {
            const boardField = document.getElementById(`${fieldIndex}.${rowIndex}`);
           // boardField.style.backgroundImage = '';
            return field = 0;
        })
    });

    const board = document.getElementById("board");
    board.innerHTML = '';

    store.dispatch(changeBoardMatrix(boardMatrix))
}