
import { createStore, combineReducers } from 'redux';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
    review: reviewReducer,
});

const store = createStore(rootReducer);

export default store;
