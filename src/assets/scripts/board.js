import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { setBoardStartPos, changeBoardMatrix } from '../../redux/actions/gameActions';


let firstPlayerPos = {};
let firstPlayerPosSwitch = true;
let boardSwitch = true;
export const setStartPosition = (clearBoardSwitch=false, clearPosSwitch=false) => {
    if (clearBoardSwitch) boardSwitch = true;
    if (clearPosSwitch) firstPlayerPosSwitch = true;
    if (!boardSwitch) return;

    if (firstPlayerPosSwitch) {
        firstPlayerPosSwitch = false;
        firstPlayerPos = store.getState().game.player.position;
    }

    const boardWindow = document.getElementById("boardWindow");
    const boardWindowStyles = window.getComputedStyle(boardWindow);
    const boardWindowWidth = parseInt(boardWindowStyles.getPropertyValue('width'));
    const boardWindowHeight = parseInt(boardWindowStyles.getPropertyValue('height'));
    const boardWidth = gameConfig.boardSize.x*gameConfig.boardFieldSize;
    const boardHeight = gameConfig.boardSize.y*gameConfig.boardFieldSize;
    const top = ((boardWindowHeight - boardHeight) / 2) + deltaPlayer().y;
    const left = ((boardWindowWidth - boardWidth) / 2) + deltaPlayer().x;

    store.dispatch(setBoardStartPos({top: top, left: left}));
    boardSwitch = false;
}


const deltaPlayer = () => {
    const currentPos = store.getState().game.player.position;

    return {
        x: (firstPlayerPos.x - currentPos.x) * gameConfig.boardFieldSize,
        y: (firstPlayerPos.y - currentPos.y) * gameConfig.boardFieldSize
    }
}


export const clearBoard = () => {
    const boardMatrix = store.getState().game.board.matrix.map(row => {
        return row.map(field => {
            return field = 0;
        })
    });

    const board = document.getElementById("board");
    board.innerHTML = '';

    store.dispatch(changeBoardMatrix(boardMatrix));
}