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
        const id = `bread-${idX}.${idY}`;
        const board = document.getElementById("board");

        if (boardMatrix[idY][idX] !== 0) return; //cannot set bread at barrier

        const bread = createBread(id, {x: idX, y: idY});
        board.appendChild(bread);

        boardMatrix[idY][idX] = 1;
        
        store.dispatch(changeBoardMatrix(boardMatrix))
    }, gameConfig.breadsAddingTime);
}


const createBread = (id, coordinates) => {
    const fieldSize = gameConfig.boardFieldSize;
    const bread = document.createElement('div');

    bread.style.top = `${coordinates.y*fieldSize}px`;
    bread.style.left = `${coordinates.x*fieldSize}px`;
    bread.style.position = 'absolute';
    bread.style.width = `${fieldSize}px`;
    bread.style.height = `${fieldSize}px`;
    bread.style.backgroundImage = `url(${breadPicPath})`;
    bread.style.zIndex = "10";
    bread.id = id;

    return bread;
}

