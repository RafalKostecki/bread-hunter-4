import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { changeBoardMatrix } from '../../redux/actions/gameActions';
import { setStat } from '../../redux/actions/uiActions';


export const chooseBread = key => {
    if (key.keyCode !== 32) return; //space button only

    const storeData = store.getState();
    const playerPos = storeData.game.player.position;
    const boardMatrix = storeData.game.board.matrix;
    const boardSize = gameConfig.boardSize;

    const breadPossiblyPosition = [
        { ...playerPos }, //the same place
        { x: playerPos.x, y: playerPos.y - 1 }, //above
        { x: playerPos.x + 1, y: playerPos.y }, //right
        { x: playerPos.x, y: playerPos.y + 1}, //below
        { x: playerPos.x - 1, y: playerPos.y} //left
    ];


    for (const pos of breadPossiblyPosition) {
        if ((pos.y < 0 || pos.x < 0) ||
        (pos.y >= boardSize.y) || pos.x >= boardSize.x) continue;

        if (boardMatrix[pos.y][pos.x] === 1) {
            const id = `${pos.x}.${pos.y}`;
            const boardField = document.getElementById(id);
            let breadQuantity = storeData.ui.gameInfoItems[1].value;
            const stats = [...storeData.ui.gameInfoItems];
            stats[1].value = breadQuantity + 1;

            boardMatrix[pos.y][pos.x] = 0;            
            boardField.style.backgroundImage = 'none';
            store.dispatch(changeBoardMatrix(boardMatrix));
            store.dispatch(setStat(stats));

            return; //prevent choose fewer loaf of breads at the same time
        }
    }
}