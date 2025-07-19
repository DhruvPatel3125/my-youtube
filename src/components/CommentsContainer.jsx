import React from "react";

const commentData=[
    
]
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div>
      <img
      className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">Name</p>
        <p>Comment</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text 2xl font-bold ">Comments:</h1>
      <Comment data={}/>
    </div>
  );
};

export default CommentsContainer;
