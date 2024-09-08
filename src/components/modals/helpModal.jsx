import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export const HelpModal = ({modalOpen, modalClose}) => {
      //model  close button
      const closeBtn = <button className="close" onClick={modalClose}>
      <span className=''>x</span>
     </button>;
    return(
        <Modal isOpen={modalOpen} centered="true" className="mymodal connectWalletModal" backdropClassName="selCurBp">
        <ModalHeader onClick={modalClose} close={closeBtn}></ModalHeader>
        <ModalBody className='py-4'>
            <div className='stepTit'>$AITO Buying Guide:</div>
            <div className='mb-4'>
                <div className="stepNo">Step1: </div>
                <div className='step-desc'>Connect your wallet with AIToredawebsite.</div>
            </div>
            <div className='mb-4'>
                <div className="stepNo">Step2: </div>
                <div className='step-desc'>Connect your wallet with AIToredawebsite.</div>
            </div>
            <div className='mb-4'>
                <div className="stepNo">Step3: </div>
                <div className='step-desc'>Connect your wallet with AIToredawebsite.</div>
            </div>
        </ModalBody>
        </Modal>
    )
}