export const petIncrement = (number: number) => {
    return {
        type: "PET_INCREASED",
        payload: number,
    };
};

export const petDecrement = () => {
    return {
        type: "PET_DECREASED",
    };
};

export const getUsers = () => {
    return {
        type: "GET_USERS_REQUESTED",
    };
};

export const getApplications = () => {
    return {
        type: "GET_APPLICATIONS_REQUESTED",
    }
}

export const getPosts = () => {
    return {
        type: "GET_POSTS_REQUESTED",
    };
};