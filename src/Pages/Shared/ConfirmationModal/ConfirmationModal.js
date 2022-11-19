import React from 'react';

const ConfirmationModal = ({ title, message, modalSuccess, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => modalSuccess(modalData)} htmlFor="confirmation-modal" className="btn btn-accent">Delete</label>
                        <label htmlFor="confirmation-modal" className="btn btn-accent btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;