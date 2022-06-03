import { createStore } from "redux";
import detailsReducer from "./details-reducer"

const store = createStore(detailsReducer);

export default store;