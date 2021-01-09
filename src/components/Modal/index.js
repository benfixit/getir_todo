import React from 'react'
import { Modal as MaterialModal, Fade, Backdrop } from '@material-ui/core'
import Form from '../Form'
import { ModalContent } from './styles';

const Modal = props => {
    const { open, onClose } = props
    return (
        <MaterialModal 
            open={open} 
            onClose={onClose} 
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <ModalContent>
                    <Form onModalClose={onClose} />
                </ModalContent>
            </Fade>
        </MaterialModal>
    )
}

export default Modal