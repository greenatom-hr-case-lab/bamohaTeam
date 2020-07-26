import React from 'react';

import Plan from '../plan/plan.component';

import {withRouter, Redirect} from 'react-router-dom';

import './modal.styles.scss';

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.modalRef = React.createRef();
    } 

    /* 
        onClick на wrapper также должен сохранять всю инфу и отправлять ее в бд
    */
    
    render() {
        const {id} = this.props.match.params;

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
                        <Plan key={id}/>
                    </div>
                </div>
    )} else {
        return (
            <Redirect to='/plans' />
    )}
}}

export default withRouter(Modal);