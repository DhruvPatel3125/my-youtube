import React, { useState } from "react";

const commentData = [
  {
    name: "Alice",
    text: "This is a great video!",
    replies: [
      {
        name: "Bob",
        text: "I agree with you, Alice!",
        replies: [
          {
            name: "Charlie",
            text: "Same here, learned a lot.",
            replies: [],
          },
        ],
      },
      {
        name: "Dave",
        text: "Thanks for sharing your thoughts.",
        replies: [],
      },
    ],
  },
  {
    name: "Eve",
    text: "Can someone explain the part at 2:10?",
    replies: [
      {
        name: "Frank",
        text: "Sure! At 2:10, the presenter talks about hooks.",
        replies: [],
      },
    ],
  },
  {
    name: "Grace",
    text: "Awesome content as always!",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg my-3 shadow-sm">
      <img
        className="w-10 h-10 rounded-full border"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="pl-6 border-l-2 border-gray-200 ml-4">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  // For demonstration, input is not functional (no state update to commentData)
  const [input, setInput] = useState("");

  return (
    <div className="mt-8 max-w-2xl  bg-white rounded-lg shadow p-6 flex flex-col ">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      {/* Comment input box */}
      <div className="flex items-start gap-3 mb-6">
        <img
          className="w-10 h-10 rounded-full border"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
        <input
          className="flex-1 border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2 bg-transparent"
          type="text"
          placeholder="Add a public comment..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition"
          disabled={!input.trim()}
        >
          Comment
        </button>
      </div>
      <hr className="mb-4" />
      <CommentsList comments={commentData} />
    </div>
   );
};

export default CommentsContainer;
