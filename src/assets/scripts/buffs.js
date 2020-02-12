import { store } from '../../Game';

//Import actions
import { setPickingQuantity, setPlayerSpeed } from '../../redux/actions/gameActions';
import { setStat } from '../../redux/actions/uiActions';

//Import congifs
import buffConfig from '../configs/buffConfig';

//Import scripts
import { getSpecificStat } from './getSpecificStat';


const buffDispatcher = key => {
    switch (key.code) {
        case 'Digit1':
            greekyKoste();
        break;
        case 'Digit2':
            juiceSpeed();
        break;
        default:
            return;
    }
}


const greekyKoste = () => {
    const pq = buffConfig.greekyKoste.increase;
    const gkTime = buffConfig.greekyKoste.time;
    const storeData = store.getState();
    const stats = [...storeData.ui.gameInfoItems];
    const rusks = getSpecificStat(stats, "rusks");

    if (rusks.value < 1) return;
    else rusks.value--;

    store.dispatch(setPickingQuantity(pq));
    store.dispatch(setStat(stats));

    setTimeout(() => {
        store.dispatch(setPickingQuantity(1));
    }, gkTime)
}


const juiceSpeed = () => {
    const juiceSpeed = buffConfig.juice.speed;
    const storeData = store.getState();
    const stats = [...storeData.ui.gameInfoItems];
    const juice = getSpecificStat(stats, "juice");
    const playerSpeedCopy = storeData.game.playerSpeed;

    if (juice.value < 1) return;
    else juice.value--;

    store.dispatch(setPlayerSpeed(juiceSpeed))
    store.dispatch(setStat(stats));

    setTimeout(() => {
        store.dispatch(setPlayerSpeed(playerSpeedCopy))
    }, buffConfig.juice.time)
}

export default buffDispatcher;