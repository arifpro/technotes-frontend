import { combineReducers } from 'redux';
import auth from './auth.reducer';
import notes from './notes.reducer';
import sharedNotes from './sharing.reducer';

const rootReducer = combineReducers({
    auth,
    notes,
    sharedNotes,
});

export default rootReducer;
