import React, { useState } from "react";
import { getComments } from "../../features/commentsSlice";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

function Comments() {
  const { user, isAuthenticated } = useAuth0();
  // const comments = useSelector(getComments || []);
const comments= [];

  const [hasOrder, setHasOrder] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleButtonClick = () => {
    if (isAuthenticated && hasOrder) {
      setShowModal(true);
    } else if (!isAuthenticated && !hasOrder) {
      alert("Log in to comment");
    } else {
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCommentText("");
    setShowModal(false);
  };

  return (
    <div className="m-6 mt-9 mb-9 text-center">
      <ul>
        {comments?.map((c, i) => (
          <li key={i}>
            <h2 className="text-black">{`"${c?.content}"`}</h2>{" "}
            <h3 className="text-gray-400">{` - ${c?.user.user} `}</h3>
          </li>
        ))}
      </ul>

      <button
        className={`rounded-xl mt-6 text-white ${
          !isAuthenticated || !hasOrder ? "bg-gray-200" : "bg-black"
        }`}
        onClick={handleButtonClick}
        disabled={!isAuthenticated && !hasOrder}
      >
        Contanos tu experiencia
      </button>

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
