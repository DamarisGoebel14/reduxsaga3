import petCounter from "./petCounter";
import petFavorite from "./petFavorite";
import users from "./users";
import applications from "./applications";
import posts from "./posts";
import { combineReducers } from "redux";

const reducers = combineReducers({
    petCounter,
    petFavorite,
    users,
    applications,
    posts
});

export default reducers;