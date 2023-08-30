import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../modules/IPost";

const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100);

    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    return (
        <div>
            <div className={'post__list'}>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>error</h1>}
                {/*{posts && posts.map(post =>*/}
                {/*    <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default PostContainer2;