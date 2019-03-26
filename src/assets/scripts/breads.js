import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { changeBoardMatrix } from '../../redux/actions/gameActions';

//Import images
import breadPicPath from '../images/breadIcon.png';


let firstIteration = false;
export let breadInterval;
export const generateBreads = () => {
    const storeData = store.getState();
    const isRunGame = storeData.game.isRunGame;
    if (!isRunGame || firstIteration) return;

    const boardMatrix = storeData.game.board.matrix;
    const boardX = gameConfig.boardSize.x;
    const boardY = gameConfig.boardSize.y;

    firstIteration = true;
    breadInterval = window.setInterval(() => {
        const idX = getRandomNum(boardX-1);
        const idY = getRandomNum(boardY-1);
        const id = `${idX}.${idY}`;
        const boardField = document.getElementById(id);

        boardMatrix[idY][idX] = 1;
        boardField.style.backgroundImage = `url(${breadPicPath})`;
        store.dispatch(changeBoardMatrix(boardMatrix))
    }, 1500);
}

const getRandomNum = max => {
    const number = Math.floor(Math.random() * max);

    return number;
}
