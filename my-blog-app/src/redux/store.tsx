import {combineReducers, applyMiddleware,createStore, legacy_createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer';
// import createSagaMiddleware from 'redux-saga';
// import productSaga from './blogSaga';
// const sagaMiddleware = createSagaMiddleware();
const store  = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    //  applyMiddleware(sagaMiddleware)
);

// const store  = configureStore({
//     reducer:rootReducer,
//     middleware:()=>[sagaMiddleware]
// });

//  sagaMiddleware.run(productSaga)

export default store