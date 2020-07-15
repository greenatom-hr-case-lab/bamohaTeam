import React, {useState} from 'react';

import CustomOverlay from '../overlay/overlay.component';
import {Modal} from 'react-overlays';
import Plan from '../plan/plan.component';

import './collection-item.styles.scss';

const CollectionItem = () => {
    const [show, setShow] = useState(false);
    const renderBackdrop = (props) => (<CustomOverlay {...props}/>);

    return(
        <div 
            className='collection-item'
            onClick={() => setShow(true)}>

            <span className='name'>Name Surname</span>
            
            <Modal
                className='modal-contents'
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby='modal-label'>
                    <Plan />
            </Modal>
            
        </div>      

    )
}

export default CollectionItem;