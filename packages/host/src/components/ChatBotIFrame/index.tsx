import { useEffect, useRef }from 'react'

interface ColorProps {
  value: string;
}

const ChatBotIFrame = ({ value }: ColorProps) => {

  //set ref to Iframe component to select Element
  const chatIframe =  useRef<HTMLIFrameElement>(null);

  //gets ref Iframe and posts message
  const handleIframe = () => {
    const iframeItem = chatIframe.current;
    if(iframeItem === null || iframeItem.contentWindow === null) {
      console.log('iframe null')
    } else {
      iframeItem.contentWindow.postMessage(value, '*')
    }
  }

  // on value/color change post message to host Iframe to recieve hex color
  useEffect(() => {
    handleIframe()
  }, [value])

  //added onload here to recieve initial color of Iframe from App.tsx
  return (
    <iframe
      ref={chatIframe}
      frameBorder="0"
      title="Chat bot"
      className="chatbot-iframe"
      src="http://localhost:3002/"
      onLoad={handleIframe}
    />
  );
}

export default ChatBotIFrame;
