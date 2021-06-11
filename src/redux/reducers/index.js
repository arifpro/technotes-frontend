import { combineReducers } from 'redux';
import auth from './auth.reducer';
import notes from './notes.reducer';
import sharing from './sharing.reducer';

const rootReducer = combineReducers({
    auth,
    notes,
    sharing,
});

export default rootReducer;
