import {createUser as addUser, fetchUsers} from '../api/users';

export const getUsers = () => async (dispatch) => {
    try{
        const { data } = await fetchUsers();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await addUser(user);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}