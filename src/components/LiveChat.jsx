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
      <form className="w-full ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault()
        console.log("ON FORM SUBMIT",livemessage)
        dispatch(addMessage({
          name:"Dhruv",
          message:livemessage,
        }))
        setLivemessage("")
      }}>
        <input
          className=" px-2 w-96"
          type="text"
          value={livemessage}
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
        />
        <button type="submit" className="px-2 mx-2 bg-green-100" >Send</button>
      </form>
    </>
  );
};

export default LiveChat;
