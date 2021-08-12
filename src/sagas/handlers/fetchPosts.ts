import { call, put } from "redux-saga/effects";
import fetchGetPosts from "../requests/fetchPosts";

export function* handleGetPosts() {
    try {
        // @ts-ignore
        const posts = yield call(fetchGetPosts);
        yield put({ type: "GET_POSTS_SUCCESS", posts: posts });
    } catch (err) {
        yield put({ type: "GET_POSTS_FAILED", message: err.message });
    }
}