import { call, put } from "redux-saga/effects";
import fetchGetApplications from "../requests/fetchApplications";

export function* handleGetApplications() {
    try {
        // @ts-ignore
        const applications = yield call(fetchGetApplications);
        yield put({ type: "GET_APPLICATIONS_SUCCESS", applications: applications });
    } catch (err) {
        yield put({ type: "GET_APPLICATIONS_FAILED", message: err.message });
    }
}
