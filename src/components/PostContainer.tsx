import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../modules/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 5000
    });

    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, []);

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    };

    const handleRemove = (post: IPost) => {
        deletePost(post);
    };
    const handleUpdate = (post: IPost) => {
        updatePost(post);
    };

    return (
        <div>
            <div className={'post__list'}>
                <button onClick={handleCreate}>CREATE POST</button>
                <button onClick={() => refetch()}>RE-FETCH</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>error</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;