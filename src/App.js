import React, {useState} from 'react'

import './style.css'
import Button from "./components/Button";
import Popup from "./components/Popup";

const App = () => {
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="flex justify-center mt-16">
                <Button
                    className="bg-yellow-600 hover:bg-yellow-700 text-white border-transparent"
                    onClick={showModalHandler}
                >Open model</Button>
            </div>

            <Popup
                heading="Deactivate account"
                text="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
                showModal={showModal}
                closeModal={closeModalHandler}
                onConfirm={()=> alert("You Clicked Deactivate")}
                />   
        </>
    )
}

export default App
