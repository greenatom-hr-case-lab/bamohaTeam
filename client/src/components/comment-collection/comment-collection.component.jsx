import React from 'react';

import CommentItem from '../comment-item/comment-item.component';
import CommentsForm from '../comments-form/comments-form.component';

import './comment-collection.styles.scss';

const CommentCollection = () => (
    <div className='comment-collection'>
        <CommentsForm />
        <CommentItem />
        <CommentItem />
    </div>
)

export default CommentCollection;