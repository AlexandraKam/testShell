import PropTypes from 'prop-types';

function Notification({ status, label, text }) {

    return (
        <div className="notification-content">

            <h2 className="notification-label">{label}</h2>
            <p className="notification-text">
                {text}
            </p>
        </div>
    );
}


export default Notification;