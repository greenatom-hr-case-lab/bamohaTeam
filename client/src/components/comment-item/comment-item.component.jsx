import React from 'react';

import './comment-item.styles.scss';

const CommentItem = () => {

    {/* 
        comment
    */}

    return (
        <div className='comment-item'>
            <p className='author'>Автор</p>
            <p className='comment-text'>Venison hamburger drumstick pork belly corned beef burgdoggen, chicken flank cupim picanha bresaola jowl kevin ham. Chicken pig t-bone swine, cow pork chop tri-tip fatback tenderloin pork belly.</p>
            <span role='button' className='bucket-icon'>&#128465;</span>
        </div>
    )
}

export default CommentItem;