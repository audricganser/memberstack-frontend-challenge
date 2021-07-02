import {useState} from 'react'
import logo from './chat.png';
import './App.css';


function App() {
  // hex here is a placeholder and never used
  const [color, setColor] = useState('#cfeaf7')

  // if message recieved from host setCOlor
  const receiveMessageFromHost = (event: MessageEvent) => {
    setColor(event.data)
  }

  //listens to events from the host
  window.addEventListener('message', receiveMessageFromHost, false);

  return (
    <div className="App">
      <div className="chat-icon" style={{backgroundColor: color}}>
        <img src={logo} className="chat-icon-image" alt="logo" />
      </div>
    </div>
  );
}

export default App;
