import {fetchPosts, createPost as addPost, deletePost as removePost} from '../api/posts';

export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await fetchPosts();

        dispatch({ type: 'pFETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await addPost(post);

        dispatch({ type: 'pCREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    console.log(id)
    try {
        await removePost(id);

        dispatch({ type: 'pDELETE', id:id });
    } catch (error) {
        console.log(error);
    }
}