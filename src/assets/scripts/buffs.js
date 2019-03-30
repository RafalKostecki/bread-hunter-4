import { store } from '../../Game';

//Import actions
import { setPickingQuantity } from '../../redux/actions/gameActions';

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
    console.log(gameConfig.greekyKosteBuff)

    store.dispatch(setPickingQuantity(pq));

    setTimeout(() => {
        store.dispatch(setPickingQuantity(1));
    }, gkTime)
}

export default buffDispatcher;