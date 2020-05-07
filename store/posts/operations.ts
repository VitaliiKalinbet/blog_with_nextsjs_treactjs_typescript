import {
    createPostStart,
    createPostError,
    createPostSuccess,
    deletePostStart,
    deletePostError,
    deletePostSuccess,
    getPostsStart,
    getPostsError,
    getPostsSuccess,
    getCurrentPostStart,
    getCurrentPostError,
    getCurrentPostSuccess,
} from './actions';
import * as API from '../../services/api';

export const getPostsOperation = () => (dispatch: any) => {
    dispatch(getPostsStart());

    API.getPosts()
        .then((res) => {
            dispatch(getPostsSuccess(res.data));
        })
        .catch((error) => {
            console.warn(error);
            dispatch(getPostsError());
        });
};

export const getCurrentPostOperation = (id: any) => (dispatch: any) => {
    dispatch(getCurrentPostStart());

    API.getPostInfo(id)
        .then((res) => {
            dispatch(getCurrentPostSuccess(res.data));
        })
        .catch((error) => {
            console.warn(error);
            dispatch(getCurrentPostError());
        });
};

export const createPostOperation = (newPost: any) => (dispatch: any) => {
    dispatch(createPostStart());

    API.createPost(newPost)
        .then((res) => {
            dispatch(createPostSuccess(res.data));
        })
        .catch((error) => {
            console.warn(error);
            dispatch(createPostError());
        });
};

export const deletePostOperation = (id: any) => (dispatch: any) => {
    dispatch(deletePostStart());

    API.deletePost(id)
        .then(() => {
            dispatch(deletePostSuccess(id));
        })
        .catch((error) => {
            console.warn(error);
            dispatch(deletePostError());
        });
};
