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


const greekyKoste = () => {
    const pq = gameConfig.greekyKosteBuff.increase;
    const gkTime = gameConfig.greekyKosteBuff.time;
    const storeData = store.getState();
    const stats = [...storeData.ui.gameInfoItems];

    if (stats[3].value < 1) return;
    else stats[3].value--;
    console.log(stats[3].value)

    store.dispatch(setPickingQuantity(pq));
    store.dispatch(setStat(stats));

    setTimeout(() => {
        store.dispatch(setPickingQuantity(1));
    }, gkTime)
}

export default buffDispatcher;