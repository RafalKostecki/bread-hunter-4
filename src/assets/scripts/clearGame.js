import { store } from '../../Game';

//Import scripts
import { setStartPosition, clearBoard } from './board';

//Import actions
import { setEndStatsBool, setPlayerPos, stopGame, setMobPos } from '../../redux/actions/gameActions';


export const clearGame = () => {
    store.dispatch(setEndStatsBool(true));
    setStartPosition(true);
    store.dispatch(setPlayerPos({x: 6, y: 5}))
    store.dispatch(setMobPos({x: 0, y: 0}))
    store.dispatch(stopGame());
    clearBoard();
}