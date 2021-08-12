import { call, put } from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";

export function* handleGetUsers() {
    try {
        // @ts-ignore 
        const users = yield call(fetchGetUsers);
        yield put({ type: "GET_USERS_SUCCESS", users: users });
    } catch (err) {
        yield put({ type: "GET_USERS_FAILED", message: err.message });
    }
}
