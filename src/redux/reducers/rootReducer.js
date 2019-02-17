import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import authReducer from './authReducer';
import uiReducer from './uiReducer';


const rootReducer = combineReducers({
    game: gameReducer,
    auth: authReducer,
    ui: uiReducer
});

export default rootReducer;