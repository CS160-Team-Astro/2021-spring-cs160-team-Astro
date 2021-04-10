export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'DELETE':
            return posts.filter(post=>post.id !== action.id)    
        default:
            return posts;
    }
}