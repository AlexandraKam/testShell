import { useEffect, useState } from 'react';
import './Notification.scss'

function Notification({ status, label, text }) {

    const [data, setData] = useState(0);

    useEffect(() => {
        setTimeout(function () {
            setData(100)
        }, 3000)
    }, [])

    return (
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
    );
}


export default Notification;