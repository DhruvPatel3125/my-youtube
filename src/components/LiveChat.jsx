import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [livemessage, setLivemessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Chat Container */}
      <div className="h-[600px] ml-2 p-4 border border-gray-300 bg-white rounded-lg shadow-lg flex flex-col">
        {/* Chat Header */}
        <div className="font-bold text-lg mb-4 border-b border-gray-200 pb-3 text-gray-800">
          Live Chat 💬
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {messages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form 
        className="w-full ml-2 mt-4 p-4 border border-gray-300 bg-white rounded-lg shadow-sm"
        onSubmit={(e) => {
          e.preventDefault()
          console.log("ON FORM SUBMIT", livemessage)
          dispatch(addMessage({
            name: "Dhruv",
            message: livemessage,
          }))
          setLivemessage("")
        }}
      >
        <div className="flex items-center gap-2">
          <input
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder="Type a message..."
            value={livemessage}
            onChange={(e) => {
              setLivemessage(e.target.value);
            }}
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors font-medium"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;