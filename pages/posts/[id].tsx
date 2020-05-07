import React, { useEffect } from 'react';
import Layout from '../../components/templates/Layout';
import { getCurrentPostOperation } from '../../store/posts/operations';
import { reduxHOC } from '../../HOC/reduxHOC';
import PostDetail from '../../components/PostDetail/PostDetail';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { clearCurrentPost } from '../../store/posts/actions';

const PostDetailPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(getCurrentPostOperation(router.query.id));

        return () => {
            dispatch(clearCurrentPost());
        };
    }, []);

    return (
        <Layout>
            <PostDetail />
        </Layout>
    );
};

PostDetailPage.getInitialProps = (props: any) => {
    const { dispatch } = props.reduxStore;
    dispatch(getCurrentPostOperation(props.query.id));
    return {};
};

export default reduxHOC(PostDetailPage);
