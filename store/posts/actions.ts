export const types = {
    GET_ALL_POSTS_START: 'GET_ALL_POSTS_START',
    GET_ALL_POSTS_ERROR: 'GET_ALL_POSTS_ERROR',
    GET_ALL_POSTS_SUCCESS: 'GET_ALL_POSTS_SUCCESS',

    GET_CURRENT_POST_START: 'GET_CURRENT_POST_START',
    GET_CURRENT_POST_ERROR: 'GET_CURRENT_POST_ERROR',
    GET_CURRENT_POST_SUCCESS: 'GET_CURRENT_POST_SUCCESS',

    CLEAR_CURRENT_POST: 'CLEAR_CURRENT_POST',

    CREATE_POST_START: 'CREATE_POST_START',
    CREATE_POST_ERROR: 'CREATE_POST_ERROR',
    CREATE_POST_START_SUCCESS: 'CREATE_POST_START_SUCCESS',

    DELETE_POST_START: 'DELETE_POST_START',
    DELETE_POST_ERROR: 'DELETE_POST_START',
    DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
};

// get all posts
export const getPostsStart = () => ({
    type: types.GET_ALL_POSTS_START,
});
export const getPostsError = () => ({
    type: types.GET_ALL_POSTS_ERROR,
});
export const getPostsSuccess = (allPosts: any) => {
    return {
        type: types.GET_ALL_POSTS_SUCCESS,
        payload: {
            posts: allPosts,
        },
    };
};

// get current post
export const getCurrentPostStart = () => ({
    type: types.GET_CURRENT_POST_START,
});
export const getCurrentPostError = () => ({
    type: types.GET_CURRENT_POST_ERROR,
});
export const getCurrentPostSuccess = (post: any) => ({
    type: types.GET_CURRENT_POST_SUCCESS,
    payload: {
        post,
    },
});
// clear current post
export const clearCurrentPost = () => ({
    type: types.CLEAR_CURRENT_POST,
});

// create post
export const createPostStart = () => ({
    type: types.CREATE_POST_START,
});
export const createPostError = () => ({
    type: types.CREATE_POST_ERROR,
});
export const createPostSuccess = (post: any) => ({
    type: types.CREATE_POST_START_SUCCESS,
    payload: {
        newpost: post,
    },
});

// delete post
export const deletePostStart = () => ({
    type: types.DELETE_POST_START,
});
export const deletePostError = () => ({
    type: types.DELETE_POST_ERROR,
});
export const deletePostSuccess = (postId: any) => ({
    type: types.DELETE_POST_SUCCESS,
    payload: {
        id: postId,
    },
});
