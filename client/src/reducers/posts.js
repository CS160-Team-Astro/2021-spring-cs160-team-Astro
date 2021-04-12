const postReducer = (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'pFETCH_ALL':
            return action.payload;
        case 'pCREATE':
            return [...posts, action.payload];
        case 'pDELETE':
            return posts.filter(post=>post.id !== action.id);
        default:
            return posts;
    }
}
export default postReducer;