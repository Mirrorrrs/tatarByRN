import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {UserReducer} from "./reducers/UserReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    user:UserReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store