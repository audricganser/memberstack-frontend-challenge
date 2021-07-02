import { useState, useEffect } from "react";
import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import Header from "./components/Header"
import './App.css';

const App = () => {

  //checks localStorageItem for initial value else set initial value to hex
  const [color, setColor] = useState(
    localStorage.getItem('valueInLocalStorage') || '#e66465'
  );

  //on load && color change update localStorage to user select color
  useEffect(() => {
    localStorage.setItem('valueInLocalStorage', color);
  }, [color]);
  
  //bubbles up from ColorPicker to set color state
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  };

  return (
    <>
      <Header value={color} />
      <div className="container">
        <div className="title">Choose a color for the chat bubble</div>
        <ColorPicker
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <ChatBotIFrame value={color} />
    </>
  );
}

export default App;
