import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { changeBoardMatrix } from '../../redux/actions/gameActions';

//Import scripts
import { getRandomNum } from './maths';

//Import images
import barrierPicPath from '../images/barrierIcon.png';


export const generateBarriers = () => {
    const storeData = store.getState();
    const minBarriers = gameConfig.barriersQuantity.min;
    const maxBarriers = gameConfig.barriersQuantity.max;
    const barriersQuantity = getRandomNum(minBarriers, maxBarriers);
    const boardMatrix = storeData.game.board.matrix;
    
    for (let i = 0; i <= barriersQuantity; i++) {
        const coordinates = generatePlace();
        const board = document.getElementById("board");

        const barrier = createBarrier(coordinates);
        
        board.appendChild(barrier);

        boardMatrix[coordinates.y][coordinates.x] = 2;
        store.dispatch(changeBoardMatrix(boardMatrix))
    }

}

const createBarrier = coordinates => {
    const fieldSize = gameConfig.boardFieldSize;
    const id = `barrier-${coordinates.x}.${coordinates.y}`;
    const barrier = document.createElement('div');

    barrier.style.top = `${coordinates.y*fieldSize}px`;
    barrier.style.left = `${coordinates.x*fieldSize}px`;
    barrier.style.position = 'absolute';
    barrier.style.width = `${fieldSize}px`;
    barrier.style.height = `${fieldSize}px`;
    barrier.style.backgroundImage = `url(${barrierPicPath})`;
    barrier.id = id;
    
    return barrier;
}


const generatePlace = () => {
    const storeData = store.getState();
    const playerPos = storeData.game.player.position;
    const boardX = gameConfig.boardSize.x;
    const boardY = gameConfig.boardSize.y;
    const xAxis = getRandomNum(0, boardX-1);
    const yAxis = getRandomNum(0, boardY-1);

    if (playerPos.x === xAxis && playerPos.y === yAxis) { //prevent set barrier at player
        generatePlace();

        return;
    }

    return {
        x: xAxis,
        y: yAxis
    }
}