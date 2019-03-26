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
        const id = `${coordinates.x}.${coordinates.y}`;
        const boardField = document.getElementById(id);

        boardField.style.backgroundImage = `url(${barrierPicPath})`;
        boardMatrix[coordinates.y][coordinates.x] = 2;
        store.dispatch(changeBoardMatrix(boardMatrix))
    }

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