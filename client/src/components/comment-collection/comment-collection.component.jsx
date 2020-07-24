import React from 'react';

import CommentItem from '../comment-item/comment-item.component';

import './comment-collection.styles.scss';

const CommentCollection = () => (
    <div className='comment-collection'>
        <textarea className='comment-form' placeholder='Комментарий'></textarea>
        <CommentItem />
        <CommentItem />
    </div>
)

export default CommentCollection;