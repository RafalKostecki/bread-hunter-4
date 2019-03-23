import { store } from '../../Game';

//Import configs
import gameConfig from '../configs/gameConfig';


let firstIteration = false;
export let breadInterval;
export const generateBreads = () => {
    const storeData = store.getState();
    const isRunGame = storeData.game.isRunGame;
    const boardMatrix = storeData.game.board.matrix;
    const boardX = gameConfig.boardSize.x;
    const boardY = gameConfig.boardSize.y;

    if (!isRunGame || firstIteration) return;

    firstIteration = true;
    breadInterval = window.setInterval(() => {
        const id = `${getRandomNum(boardX-1)}.${getRandomNum(boardY-1)}`;
        console.log(id);
        const boardField = document.getElementById(id);

        boardField.innerHTML = 'b';
    }, 900);
}

const getRandomNum = max => {
    const number = Math.floor(Math.random() * max);

    return number;
}
