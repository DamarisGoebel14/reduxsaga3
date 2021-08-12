import { AnyAction } from 'redux'


const initialState = {
    applications: [],
    loading: false,
    error: null,
};

const applications = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "GET_APPLICATIONS_REQUESTED":
            return { ...state, loading: true };
        case "GET_APPLICATIONS_SUCCESS":
            return { ...state, loading: false, applications: action.applications };
        case "GET_APPLICATIONS_FAILED":
            return { ...state, loading: false, error: action.message };
        default:
            return state;
    }
};

export default applications;