import React, { useState, useEffect } from "react";
import { getComments } from "../../features/commentsSlice";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { getOrders } from "../../features/ordersSlice";

const URL = import.meta.env.VITE_URL;
const INTERVAL_DELAY = 5000;

function Comments() {
  const user = JSON.parse(localStorage.getItem("user"));
  const orders = useSelector(getOrders);
  const comments = useSelector(getComments);
  const { isAuthenticated } = useAuth0();
  const [hasOrder, setHasOrder] = useState(false);
  const [hasComment, setHasComment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  // console.log("comments", hasOrder, hasComment);
  useEffect(() => {
    const findHasComment = comments?.find((c) => c.mail === user?.email);
    if (findHasComment) {
      setHasComment(true);
    }

    const findHasOrder = orders?.find(
      (o) => o.email === user?.email && o.paymentStatus === "approved"
    );
    if (findHasOrder) {
      setHasOrder(true);
    }
  }, [comments, orders, user]);

  useEffect(() => {
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
      setHasComment(true);
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

  return (
    <div className="m-6 mt-9 mb-9 text-center">
      {renderComments()}

      {isAuthenticated && hasOrder && !hasComment ? ( //
        <button
          className="rounded-xl mt-6 bg-black text-white"
          onClick={handleButtonClick}
        >
          Deja tu comentario
        </button>
      ) : (
        <button className="rounded-xl mt-6 bg-gray-200 text-white" disabled>
          Deja tu comentario
        </button>
      )}

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
