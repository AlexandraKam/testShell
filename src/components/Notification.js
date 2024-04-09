import { useEffect, useState } from 'react';
import './Notification.scss';


function Notification({ status, label, text, modalIsClose }) {

    const [data, setData] = useState(0);
    const [timer, setTimer] = useState();

    useEffect(() => {
        console.log('useEFFECT')
        let i = 0;
        let id = setInterval(() => {
            setData(i++);
            
            if (i == 100) {
                clearInterval(id);
                modalIsClose();
            }
        }, 30)
        setTimer(id);
    }, [])

    

    const handleMouseEnter = () => {
        clearInterval(timer);
        console.log(timer)
    }


    return (
        <div className="notification-content" onMouseEnter={handleMouseEnter}>
            <img className="notification-icon" src={status === "success" ? "icons/success.png" : "icons/error.png"}></img>
            <div className="notification-description">
                <h2 className="notification-label">{label}</h2>
                <p className="notification-text">
                    {text}
                </p>
                <div className="progress">
                    <progress max="100" value={data} />
                    <div className="progress-bg">
                        <div className="progress-bar" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Notification;