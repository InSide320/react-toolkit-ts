import React, {FC} from 'react';
import {IPost} from "../modules/IPost";

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className={"post"}>
            {post.id}. {post.title}
            <br/>
            {post.body}
            <button>Delete</button>
        </div>
    );
};

export default PostItem;