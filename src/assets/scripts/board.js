import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { setBoardStartPos } from '../../redux/actions/gameActions';

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
    console.log(top, left)

    store.dispatch(setBoardStartPos({top: top, left: left}));
    boardSwitch = false;
}