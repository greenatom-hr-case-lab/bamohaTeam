import React from 'react';

import Plan from '../plan/plan.component';

import {withRouter} from 'react-router-dom';

import './modal.styles.scss';

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        const { isModal } = this.props;
    }
    
    render() {
        const { id } = this.props.match.params;

        if (this.props.isModal) {
            return(
                <div
                    role='button'
                    ref={this.modalRef}
                    className='modal-wrapper'
                    onClick={() => this.props.history.goBack()}
                >
                    <div
                        role='button'
                        className='modal'
                        onClick={e => e.stopPropagation()}
                    >
                        <Plan />
                    </div>
                </div>
    )} else {
        return (
          <div className='no-modal-wrapper'> 404 </div>
    )}
}}

export default withRouter(Modal);