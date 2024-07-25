import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Dashboard from "./Dashboard";
import Cards from "../components/cards";
import Header from "../components/Header";

import { setColorIndex } from "../features/color/colorSlice"; 

const textColors = [
  { textColor: "text-yellow-400", bgColor: "bg-yellow-300" },
  { textColor: "text-blue-400", bgColor: "bg-blue-300" },
  { textColor: "text-green-400", bgColor: "bg-green-300" }
];

function Chat() {
  const dispatch = useDispatch();
  const colorIndex = useSelector((state) => state.color.colorIndex);
  const colors = textColors[colorIndex] || { textColor: "text-blue-400", bgColor: "bg-blue-300" };

  const [message, setMessage] = useState([
    { username: "Eshika", message: "Hii im eshika" },
    { username: "Reshika", message: "Hii I'm Reshika" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  function handleMessage() {
    if (newMessage.trim() === '') return;
    setMessage([...message,
      { username: "you", message: newMessage, timestamp: new Date(), }
    ]);
    setNewMessage("");
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleMessage();
      console.log("Enter key pressed");
    }
  };

  return (
    <>
      <Header />
      <div className='grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20'>
        <div className='grow'>
          <div className='min-w-[200px] md:min-w-0'>
            <section className="pl-4 pr-4 rounded-lg border-[1px] border-gray-300 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <h3 className="font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem] mb-4 text-center">
                Welcome to guest
              </h3>
              <div>
                <div className="chat-bg h-[40rem]">
                  {message.map((msg, index) => (
                    <div key={index} className="flex gap-2 dark:text-white">
                      <h3
                        className={`font-bold ${colors.textColor} inline-flex relative duration-200 cursor-pointer before:absolute before:inset-0 before:${colors.bgColor} before:opacity-30 before:-z-10 hover:before:-rotate-0 before:-rotate-3 before:translate-y-1/4 before:h-4`}
                      >
                        {msg.username}
                      </h3>
                      : <span>{msg.message}</span>
                      <span><span className="text-gray-500 ml-2 text-end">{formatTimestamp(msg.timestamp)}</span></span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center w-full mt-4 mb-4">
                  <div className="messageBox">
                    <div className="fileUploadWrapper">
                      <label htmlFor="file">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                          <circle strokeWidth="20" stroke="#6c6c6c" fill="none" r="158.5" cy="168.5" cx="168.5"></circle>
                          <path strokeLinecap="round" strokeWidth="25" stroke="#6c6c6c" d="M167.759 79V259"></path>
                          <path strokeLinecap="round" strokeWidth="25" stroke="#6c6c6c" d="M79 167.138H259"></path>
                        </svg>
                        <span className="tooltip">Add an image</span>
                      </label>
                      <input type="file" id="file" name="file" />
                    </div>
                    <input
                      required
                      placeholder="Message..."
                      type="text"
                      id="messageInput"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <button id="sendButton" onClick={handleMessage}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                        <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <aside className='md:w-[260px] lg:w-[300px] shrink-0'>
          <div className="md:w-[262px] lg:w-[300px] space-y-6">
            <Cards />
          </div>
        </aside>
      </div>
      {/* <Dashboard /> */}
    </>
  );
}

export default Chat;
