import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"

//Dev Mode
const enhancer = composeWithDevTools(applyMiddleware(thunk));

export function initializeStore(initialState = {}) {
    return createStore(reducers, initialState, enhancer)
    //Dev Mode 
    if (module.hot) {
        module.hot.accept("./reducers", () =>
            store.replaceReducer(require("./reducers").default)
        )
    }
    return store
}