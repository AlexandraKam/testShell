import Notification from './components/Notification'
import './App.css';
import { useState } from 'react';


function App() {

  const [notificationIsOpen, setNotificationIsOpen] = useState([false, 0, 0, 0]);

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

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <div className="new-request">
          <button className="new-request__button" onClick={() => simulateServer().then(() => { setNotificationIsOpen([true, "success", "Успешно", "Изменения успешно сохранены"]) }).
            catch(() => { setNotificationIsOpen([true, "error", "Изменения не сохранены", "Потеря интернет соединения"]) })}>Запрос</button>
        </div>
        {notificationIsOpen[0] && < Notification status={notificationIsOpen[1]} label={notificationIsOpen[2]} text={notificationIsOpen[3]} />}
      </div>
    </div>
  );
}

export default App;
