import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { changeBoardMatrix } from '../../redux/actions/gameActions';

//Import images
import breadPicPath from '../images/breadIcon.png';

//Import scripts
import { getRandomNum } from './maths';


let firstIteration = true;
export let breadInterval;
export const generateBreads = (clearFirstIteration) => {
    if (clearFirstIteration) firstIteration = true;

    const storeData = store.getState();
    const isRunGame = storeData.game.isRunGame;
    
    if (!isRunGame || !firstIteration) return;

    const boardMatrix = storeData.game.board.matrix;
    const boardX = gameConfig.boardSize.x;
    const boardY = gameConfig.boardSize.y;

    firstIteration = false;
    breadInterval = window.setInterval(() => {
        const idX = getRandomNum(0, boardX);
        const idY = getRandomNum(0, boardY);
        const id = `${idX}.${idY}`;
        const boardField = document.getElementById(id);

        if (boardMatrix[idY][idX] === 2) return; //cannot set bread at barrier

        boardMatrix[idY][idX] = 1;
        boardField.style.backgroundImage = `url(${breadPicPath})`;
        store.dispatch(changeBoardMatrix(boardMatrix))
    }, gameConfig.breadsAddingTime);
}


