import { store } from '../../Game';

//Import scripts
import { movementAnimation } from './movementAnimation';
import { cordsToVertexId } from './maths';
import { generatePathToDestination } from './pathToDestination';
import { getSpecificStat } from './getSpecificStat';

//Import configs
import gameConfig from '../configs/gameConfig';
import mobsConfig from '../configs/mobsConfig';

//Import actions
import { setMobPos } from '../../redux/actions/gameActions';
import { setStat } from '../../redux/actions/uiActions';


export const mobMovement = (shortestPath, destination) => {
    const pathToDestination = generatePathToDestination(shortestPath, destination);
    const boardSize = gameConfig.boardSize;
    
    pathToDestination.forEach((vertexId, index) => {
        setTimeout(() => {
            const storeData = store.getState();
            const mobPosition = storeData.game.mob.position;
            const mobPositionVertex = cordsToVertexId(mobPosition);
            let moveCode;

            if (index === pathToDestination.length - 1) isCaught(mobPositionVertex);


            if (mobPositionVertex - boardSize.x === vertexId) moveCode = 'KeyW'; //up
            else if (mobPositionVertex + 1 === vertexId) moveCode = 'KeyD'; //right
            else if (mobPositionVertex + boardSize.x === vertexId) moveCode = 'KeyS'; //down
            else if (mobPositionVertex - 1 === vertexId) moveCode = 'KeyA'; //left
            else throw new Error(`Invalid moveCode determination! mobPositionVertex: ${mobPositionVertex}, vertexId: ${vertexId}, pathToDestination: ${pathToDestination}, destination: ${destination}`);

            changeMobPosition(moveCode, mobPosition);
        }, mobsConfig.speed * (index + 1))
    })
}


const changeMobPosition = (moveCode, mobPosition) => {
    if (!moveCode) return;
    let coordinateChange = {x: 0, y: 0};

    switch(moveCode) {
        case 'KeyW': //up
            coordinateChange = {x: 0, y: -1};
        break;
        case 'KeyD': //right
            coordinateChange = {x: 1, y: 0};
        break;
        case 'KeyS': //down
            coordinateChange = {x: 0, y: 1};
        break;
        case 'KeyA': //left
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


const isCaught = mobPositionVertex => {
    const storeData = store.getState();
    const boardSize = gameConfig.boardSize;
    const playerPosition = storeData.game.player.position;
    const playerVertex = cordsToVertexId(playerPosition);

    if ((mobPositionVertex - boardSize.x === playerVertex) ||
       (mobPositionVertex + 1 === playerVertex) ||
       (mobPositionVertex + boardSize.x === playerVertex) ||
       (mobPositionVertex - 1 === playerVertex)) {
        const stats = [...storeData.ui.gameInfoItems];
        const lifes = getSpecificStat(stats, "lifes");
    
        if (lifes.value <= 1) console.log('PRZEGRANA')
        else lifes.value--;
    
        console.log(stats)
    
        store.dispatch(setStat(stats));
    }
        
}