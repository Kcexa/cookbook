import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import { env } from '../configuration';

const sagaMiddleware = reduxSaga();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

if (env === 'development') {
    window.store = store;
}

export default store;
