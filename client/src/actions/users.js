import {fetchUsers, createUser as addUser, deleteUser as removeUser} from '../api/users';

export const getUsers = () => async (dispatch) => {
    try{
        const { data } = await fetchUsers();

        dispatch({ type: 'uFETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await addUser(user);

        dispatch({ type: 'uCREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    console.log(id)
    try {
        await removeUser(id);

        dispatch({ type: 'uDELETE', id:id });
    } catch (error) {
        console.log(error);
    }
}