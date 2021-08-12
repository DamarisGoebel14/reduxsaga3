const url = "https://jsonplaceholder.typicode.com/posts";

const fetchGetPosts = () => {
    return fetch(url, {
        method: "GET",
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};

export default fetchGetPosts;