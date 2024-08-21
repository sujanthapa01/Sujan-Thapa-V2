import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Header from "../components/Header";

const textColors = [
  { textColor: "text-yellow-400", bgColor: "bg-yellow-300" },
  { textColor: "text-blue-400", bgColor: "bg-blue-300" },
  { textColor: "text-green-400", bgColor: "bg-green-300" }
];

function Chat({ userId }) { 
  const userColors = useSelector((state) => state.color.userColors);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    axios.get('http://localhost:7000/chat/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  function handleMessage() {
    if (newMessage.trim() === '') return;
    const colorIndex = userColors[userId] || 0;

    const message = {
      userId,
      username: "you",
      message: newMessage,
      timestamp: new Date(),
      colorIndex
    };

    axios.post('http://localhost:7000/chat/send', message)
      .then(response => {
        setMessages([...messages, response.data]);
        setNewMessage("");
      })
      .catch(error => {
        console.error("Error sending message:", error);
      });
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleMessage();
    }
  };

  return (
    <>
      <Header />
      <div className='grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-[1.5rem] md:pt-[1.5rem] lg-pt-[4rem] xl:pt-[4rem] pb-16 md:pb-20'>
        <div className='grow'>
          <div className='min-w-[200px] md:min-w-0'>
            <section className="pl-4 pr-4 rounded-lg border-[1px] border-gray-300 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <h3 className="font-bold text-gray-700 text-g text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem] mb-4 text-center border-b-[1px]  w-full border-gray-300 dark:border-slate-800">
                Welcome to guest
              </h3>
              <div>
                <div className="flex flex-col gap-y-2 h-[28rem] max-w-[700px] break-words whitespace-normal md:h-[35rem] lg:h-[40rem] xl:h-[40rem] 2xl:h-[40rem] ">
                  {messages.map((msg, index) => {
                    const colors = textColors[msg.colorIndex] || { textColor: "text-blue-400", bgColor: "bg-blue-300" };

                    return (
                      <div key={index} className="flex gap-2 dark:text-white">
                        <h3 className={`font-bold ${colors.textColor} inline-flex relative duration-200 cursor-pointer before:absolute before:inset-0 before:${colors.bgColor} before:opacity-30 before:-z-10 hover:before:-rotate-0 before:-rotate-3 before:translate-y-1/4 before:h-4`}>
                          {msg.username}
                        </h3>
                        : <div className='flex justify-between w-full'>
                          <span className='text-slate-600 dark:text-slate-400 message-bg'>{msg.message}</span>
                          <span><span className="text-gray-500 ml-2 text-end">{formatTimestamp(msg.timestamp)}</span></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center w-full mt-4 mb-4">
                  <div className="messageBox">
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
                        <path
                          fill="none"
                          d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                        ></path>
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="33.67"
                          stroke="#6c6c6c"
                          d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
