import React from 'react';

import {Modal} from 'react-overlays';

import Plan from '../plan/plan.component';

import './collection-item.styles.scss';

const CollectionItem = () => {
  /*  const [show, setShow] = useState(false);
    const Backdrop = ("div");
    const renderBackdrop = (props) => <Backdrop {...props} />;
*/
    return(
        <div 
            className='collection-item'
        //    onClick={() => setShow(true)}
        >
            Name Surname
        </div>
 /*           <Modal
                className='modal-collection-item'
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label">
            </Modal> */
        

    )
}

export default CollectionItem;