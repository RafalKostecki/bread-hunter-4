import { store } from '../../Game';

//Import scripts
import { movementAnimation } from './movementAnimation';
import { cordsToVertexId } from './maths';
import { generatePathToDestination } from './pathToDestination';

//Import configs
import gameConfig from '../configs/gameConfig';
import mobsConfig from '../configs/mobsConfig';

//Import actions
import { setMobPos } from '../../redux/actions/gameActions';


export const mobMovement = (shortestPath, destination) => {
    const pathToDestination = generatePathToDestination(shortestPath, destination);
    const boardSize = gameConfig.boardSize;
    
    pathToDestination.forEach((vertexId, index) => {
        setTimeout(() => {
            const storeData = store.getState();
            const mobPosition = storeData.game.mob.position;
            const mobPositionVertex = cordsToVertexId(mobPosition);
            let moveCode;

            if (mobPositionVertex - boardSize.x === vertexId) moveCode = 87; //up
            else if (mobPositionVertex + 1 === vertexId) moveCode = 68; //right
            else if (mobPositionVertex + boardSize.x === vertexId) moveCode = 83; //down
            else if (mobPositionVertex - 1 === vertexId) moveCode = 65; //left
            else if (mobPositionVertex === vertexId) console.log('DOPADŁA CIE  PRACOWNICA KATLA')
            // else throw new Error(`Invalid moveCode determination! mobPositionVertex: ${mobPositionVertex}, vertexId: ${vertexId}, pathToDestination: ${pathToDestination}, destination: ${destination}`);

            changeMobPosition(moveCode, mobPosition);
        }, mobsConfig.speed * (index + 1))
    })
}


const changeMobPosition = (moveCode, mobPosition) => {
    if (!moveCode) return;
    let coordinateChange = {x: 0, y: 0};

    switch(moveCode) {
        case 87: //up
            coordinateChange = {x: 0, y: -1};
        break;
        case 68: //right
            coordinateChange = {x: 1, y: 0};
        break;
        case 83: //down
            coordinateChange = {x: 0, y: 1};
        break;
        case 65: //left
            coordinateChange = {x: -1, y: 0};
        break;
        default:
            coordinateChange = {x: 0, y: 0};
    }

    const newMobPosition = {
        x: mobPosition.x + coordinateChange.x, 
        y: mobPosition.y + coordinateChange.y
    }

    store.dispatch(setMobPos(newMobPosition))

    movementAnimation(moveCode, 'mobBg', mobsConfig.speed);
    
}