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
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col overflow-scroll ">
        <div className="font-bold text-lg mb-2 border-b pb-2">Live Chat</div>
        <div className="flex-1 overflow-y-auto">
          {messages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>
      <form className="w-full ml-2 border-t border-gray-200 flex items-center gap-2 p-2 bg-white" onSubmit={(e)=>{
        e.preventDefault()
        console.log("ON FORM SUBMIT",livemessage)
        dispatch(addMessage({
          name:"Dhruv",
          message:livemessage,
        }))
        setLivemessage("")
      }}>
        <input
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-sm"
          type="text"
          value={livemessage}
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition" >Send</button>
      </form>
    </>
  );
};

export default LiveChat;
