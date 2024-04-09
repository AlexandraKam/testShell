import Notification from './components/Notification'
import './App.css';
import { useState } from 'react';

function App() {

  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [notificationContent, setNotificationContent] = useState([0, 0, 0]);

  const simulateServer = () => {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        return resolve();
      }
      const t = setTimeout(() => {
        reject();
        return clearTimeout(t);
      }, 1000);
    });
  };

  const openNotification = () => {
    simulateServer()
      .then(() => {
        setNotificationContent(["success", "Успешно", "Изменения успешно сохранены"]);
        setNotificationIsOpen(true)
      })
      .catch(() => {
        setNotificationContent(["error", "Изменения не сохранены", "Потеря интернет соединения"]);
        setNotificationIsOpen(true)
      })
  }

  const closeModal = () => {
    setNotificationIsOpen(false)
  }

  return (
    <div className="container" onClick={closeModal}>
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <div className="new-request">
          <button className="new-request__button" onClick={openNotification}>Запрос</button>
        </div>
        {notificationIsOpen && < Notification status={notificationContent[0]} label={notificationContent[1]} text={notificationContent[2]} modalIsClose={closeModal} />}
      </div>
    </div>
  );
}

export default App;
