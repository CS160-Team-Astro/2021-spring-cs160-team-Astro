export default (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'pDELETE':
            return posts.filter(post=>post._id !== action.id)   
        default:
            return posts;
    }
}