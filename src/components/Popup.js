import React from 'react'

import Button from "./Button";

const Popup = ({heading, text, showModal, closeModal, onConfirm}) => {
    return (
        <div className={`fixed inset-0 ${showModal ? "visible":"hidden"}`} role="popup">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={closeModal} role="overlay"></div>

            <div className="max-w-md bg-white rounded-2xl shadow-xl overflow-hidden mt-20 mx-auto transform" role="popup-container">
                <div className="px-6 pt-5 pb-4 bg-white">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">{heading}</h2>
                    <p className="text-sm text-gray-500 mt-2">{text}</p>
                </div>

                <div className="flex justify-end bg-gray-50 px-6 py-3">
                    <Button
                        className="bg-white hover:bg-gray-50  text-gray-600 border-gray-300 mr-2"
                        onClick={closeModal}
                    >Cancel</Button>
                    <Button
                        className="bg-red-600 hover:bg-red-700  text-white border-transparent"
                        onClick={onConfirm}
                    >Deactivate</Button>
                </div>
            </div>
        </div>
    )
}

export default Popup
