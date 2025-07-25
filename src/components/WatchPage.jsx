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
    <div className="p-5 flex flex-col">
      {/* Video player and Live Chat */}
      <div className="flex w-full">
        <div className="flex-grow">
          <iframe
            width="100%" // Use 100% to fill available space
            height="500" // You might adjust this based on responsiveness needs
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>

          {/* Video Title and Channel Info */}
          <div className="mt-4 px-2">
            <h1 className="text-xl font-bold mb-2">Video Title Goes Here</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" // Placeholder image for channel
                  alt="channel-logo"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <h3 className="font-semibold">Channel Name</h3>
                  <p className="text-gray-600 text-sm">1M subscribers</p>
                </div>
              </div>
              {/* Subscribe button */}
              <button className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition">
                Subscribe
              </button>
            </div>
            {/* Like/Dislike/Share Buttons */}
            <div className="flex items-center mt-4 gap-4 text-gray-700">
              <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                <span className="mr-1">👍</span> 1.2M
              </button>
              <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                <span className="mr-1">👎</span> 10K
              </button>
              <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                <span className="mr-1">➡️</span> Share
              </button>
              <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                <span className="mr-1">⬇️</span> Download
              </button>
              <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                <span className="mr-1">...</span>
              </button>
            </div>
            {/* Video Description */}
            <div className="bg-gray-100 p-3 rounded-lg mt-4 text-sm">
                <p className="font-semibold">1,234,567 views • 2 days ago</p>
                <p className="line-clamp-2 hover:line-clamp-none cursor-pointer">
                    This is a sample video description. It can contain details about the video, links, and more.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="flex-shrink-0 ml-8"> {/* Added ml-8 for spacing */}
          <LiveChat />
        </div>
      </div>
      {/* Comments section below the video */}
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
