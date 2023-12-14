import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";

export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
});

export const store = createStore(rootReducer);