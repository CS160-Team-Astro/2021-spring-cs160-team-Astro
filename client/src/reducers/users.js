const userReducer = (users = [], action) => {   
    switch (action.type) {
        case 'uFETCH_ALL':
            return action.payload;
        case 'uCREATE':
            return [...users, action.payload];
        case 'uDELETE':
            return users.filter(user=>user.id !== action.id)      
        default:
            return users;
    }
}
export default userReducer;