import { useEffect, useState } from 'react';
import './Notification.scss';
import Modal from 'react-modal';

function Notification({ status, label, text }) {

    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [data, setData] = useState(0);

    useEffect(() => {
        // setTimeout(function () {
        //     setData(100);
        //     setTimeout(() => {
                
        //     }, 100)

        // }, 3000)
        let i = 0;
        let id = setInterval(() => {
            setData(i++);
            if (i == 100) {
                clearInterval(id);
                setModalIsOpen(false)
            }
        }, 30)

    }, [])

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const modalContent = (
        <div className="notification-content">
            <img className="notification-icon" src={status === "success" ? "icons/success.png" : "icons/error.png"}></img>
            <div className="notification-description">
                <h2 className="notification-label">{label}</h2>
                <p className="notification-text">
                    {text}
                </p>
                <div className="progress">
                    <progress max={100} value={data} />
                    <div className="progress-bg">
                        <div className="progress-bar" />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            {modalContent}
        </Modal>
    );
}


export default Notification;