import {all, takeLatest} from "redux-saga/effects";
import {handleGetUsers} from "./handlers/fetchUsers";
import {handleGetApplications} from "./handlers/fetchApplications"
import {handleGetPosts} from "./handlers/fetchPosts";

export default function* rootSaga() {
    yield all([watcherUserSaga()]);
}

function* watcherUserSaga() {
    yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
    yield takeLatest("GET_APPLICATIONS_REQUESTED", handleGetApplications);
    yield takeLatest("GET_POSTS_REQUESTED", handleGetPosts);
}