import { store } from '../../Game';

//Import actions
import { setPickingQuantity } from '../../redux/actions/gameActions';
import { setStat } from '../../redux/actions/uiActions';

//Import congifs
import gameConfig from '../configs/gameConfig';


const buffDispatcher = key => {
    switch (key.keyCode) {
        case 49: 
            greekyKoste();
        break;
        default:
            return;
    }
}


export const getSpecificStat = (stats, requiredStat) => {
    const statValue = stats.filter(stat => {
        if (stat.name.toLowerCase() === requiredStat.toLowerCase()) return stat;

        return null;
    });

    return statValue[0];
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