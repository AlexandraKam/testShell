import Notification from './components/Notification'
import './App.css';


function App() {

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
        <div className='new-request'>
          <button className="new-request__button" onClick={simulateServer}>Запрос</button>
        </div>
        <Notification />
      </div>
    </div>
  );
}

export default App;
