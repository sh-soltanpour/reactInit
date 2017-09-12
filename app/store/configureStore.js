import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import StockApp from "../reducers";

export default function configureStore() {
    const store = createStore(StockApp, applyMiddleware(thunk));
    return store;
}
