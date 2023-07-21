import React, { useState, useEffect } from "react";
import { getComments } from "../../features/commentsSlice";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { getOrders } from "../../features/ordersSlice";

const URL = import.meta.env.VITE_URL;
const INTERVAL_DELAY = 5000;

function Comments() {
  const orders = useSelector(getOrders);
  const comments = useSelector(getComments);
  const { user, isAuthenticated } = useAuth0();
  const [hasOrder, setHasOrder] = useState(false);
  const [hasComment, setHasComment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  console.log(user);
  useEffect(() => {
    // Check if the user has a comment
    const findHasComment = comments?.find((c) => c.mail === user?.email);
    if (findHasComment) {
      setHasComment(true);
    }

    // Check if the user has an approved order
    const findHasOrder = orders?.find(
      (o) => o.email === user?.email && o.paymentStatus === "approved"
    );
    if (findHasOrder) {
      setHasOrder(true);
    }
  }, [comments, orders, user]);

  useEffect(() => {
    // Update the displayed comment index every 5 seconds
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * comments.length);
      setCurrentCommentIndex(randomIndex);
    }, INTERVAL_DELAY);

    return () => {
      clearInterval(interval);
    };
  }, [comments.length]);

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      alert("Log in to comment");
    } else if (!hasOrder) {
      alert("Necesitas comprar algo para comentar");
    } else if (!hasComment) {
      setShowModal(true);
    } else {
      // Shuffle the comments array and set a random index
      const shuffledComments = shuffleArray(comments);
      const randomIndex = Math.floor(Math.random() * shuffledComments.length);
      setCurrentCommentIndex(randomIndex);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      alert("Please enter a valid comment.");
      return;
    }

    try {
      const createComment = await axios.post(`${URL}/comments/create`, {
        content: commentText,
        email: user?.email,
      });

      setCommentText("");
      setShowModal(false);
      setHasComment(true); // Mark that the user has commented
    } catch (error) {
      console.log(error);
    }
  };

  const renderComments = () => {
    return (
      <ul>
        <li>
          <h2 className="text-black text-xl font-bold">{`"${comments[currentCommentIndex]?.content}"`}</h2>{" "}
          <h3 className="text-gray-400">{` - ${comments[currentCommentIndex]?.user?.user} `}</h3>
        </li>
      </ul>
    );
  };

  // const renderComments = () => {
  //   return (
  //     <ul>
  //       {comments?.map((c, i) => (
  //         <li key={i}>
  //           <h2 className="text-black">{`"${c.content}"`}</h2>{" "}
  //           <h3 className="text-gray-400">{` - ${c.user?.user} `}</h3>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  const isDisabled = !isAuthenticated || !hasOrder || hasComment;

  return (
    <div className="m-6 mt-9 mb-9 text-center">
      {renderComments()}

      {!isAuthenticated || !hasOrder || hasComment ? (
        <button
          className={`rounded-xl mt-6 text-white ${
            !isAuthenticated || !hasOrder || hasComment
              ? "bg-gray-200"
              : "bg-black"
          }`}
          onClick={handleButtonClick}
          disabled={!isAuthenticated || !hasOrder || hasComment}
        >
          Deja tu comentario
        </button>
      ) : null}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {" "}
          <div className="bg-white  p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <label htmlFor="comment">Comment: </label>
              <input
                type="text"
                id="comment"
                value={commentText}
                placeholder="Escribe aqui"
                onChange={(e) => setCommentText(e.target.value)}
              />

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg mt-4"
              >
                Submit
              </button>
            </form>{" "}
          </div>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className=" text-black px-4 py-2 rounded-lg -mt-20"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Comments;
