import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';


export const checkCollisions = (keyCode, charPosition) => {
    const storeData = store.getState();
    const boardSize = gameConfig.boardSize;
    const boardMatrix = storeData.game.board.matrix;

    switch(keyCode) {
        case 87: //up
            if (charPosition.y === 0 || boardMatrix[charPosition.y - 1][charPosition.x] === 2) return true;
        break;
        case 68: //right
            if (charPosition.x === boardSize.x-1 || boardMatrix[charPosition.y][charPosition.x + 1] === 2) return true;
        break;
        case 83: //down
            if (charPosition.y === boardSize.y-1 || boardMatrix[charPosition.y + 1][charPosition.x] === 2) return true;
        break;
        case 65: //left
            if (charPosition.x === 0 || boardMatrix[charPosition.y][charPosition.x - 1] === 2) return true;
        break;
        default:
            return;
    }
}