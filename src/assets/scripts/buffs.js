import { store } from '../../Game';

//Import actions
import { setPickingQuantity } from '../../redux/actions/gameActions';
import { setStat } from '../../redux/actions/uiActions';

//Import congifs
import gameConfig from '../configs/gameConfig';

//Import scripts
import { getSpecificStat } from './getSpecificStat';


const buffDispatcher = key => {
    switch (key.code) {
        case 'Digit1':
            greekyKoste();
        break;
        default:
            return;
    }
}


const greekyKoste = () => {
    const pq = gameConfig.greekyKosteBuff.increase;
    const gkTime = gameConfig.greekyKosteBuff.time;
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

export default buffDispatcher;