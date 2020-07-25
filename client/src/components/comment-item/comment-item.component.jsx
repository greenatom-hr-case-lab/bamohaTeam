import React from 'react';

import './comment-item.styles.scss';

const CommentItem = () => (
    <div className='comment-item'>
        <textarea className='comment-text'></textarea>
        <span role='button' className='bucket-icon'>&#128465;</span>
    </div>
)

export default CommentItem;