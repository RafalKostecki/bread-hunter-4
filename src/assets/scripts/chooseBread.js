import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import actions
import { changeBoardMatrix } from '../../redux/actions/gameActions';
import { setStat } from '../../redux/actions/uiActions';

//Import scripts
import { clearGame } from './clearGame';


export const chooseBread = key => {
    key = key.code ? key.code : key;
    if (key !== 'Space') return; //space button only

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
            const id = `bread-${pos.x}.${pos.y}`;
            const bread = document.getElementById(id);
            const breadQuantity = storeData.ui.gameInfoItems[1].value;
            const stats = [...storeData.ui.gameInfoItems];

            stats[1].value = breadQuantity + storeData.game.pickingQuantity;
            boardMatrix[pos.y][pos.x] = 0;    

            bread.style.backgroundImage = 'none !important';
            bread.remove();
            store.dispatch(changeBoardMatrix(boardMatrix));
            store.dispatch(setStat(stats));

            if (stats[1].value >= gameConfig.requiredBreads) clearGame();

            return; //prevent choose fewer loaf of breads at the same time
        }
    }
}

