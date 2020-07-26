import React from 'react';

import './comment-form.styles.scss';

const CommentsForm = () => (
    <div className='comments-form'>
        <form action="">
            <textarea className='comment-text' placeholder='Добавить комментарий'></textarea>
            <button className='comment-button'>Добавить</button>
        </form>
    </div>
)

export default CommentsForm;