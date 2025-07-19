import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer"

const WatchPage = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      {/* Video player goes here */}
      <div className="w-full max-w-4xl mb-8">
        {/* Replace with your actual video player component */}
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
      {/* Comments section below the video */}
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
