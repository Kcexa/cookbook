import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const composeEnhancers =
    process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = reduxSaga();
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);

export default store;
