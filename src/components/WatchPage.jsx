import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      {/* Video player goes here */}
      <div className=" mb-8 flex">
        {/* Replace with your actual video player component */}
        <div>
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/"+searchparams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex-1">
        <LiveChat/>

      </div>
      </div>
      {/* Comments section below the video */}
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
