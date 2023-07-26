import React, { useState, useEffect } from "react";
import { getComments } from "../../features/commentsSlice";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { getOrders } from "../../features/ordersSlice";
import Swal from "sweetalert2";

const URL = import.meta.env.VITE_URL;
const INTERVAL_DELAY = 2000;

function Comments() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const orders = useSelector(getOrders);
  const comments = useSelector(getComments) || [];
  const { user, isAuthenticated } = useAuth0();
  const [hasOrder, setHasOrder] = useState(false);
  const [hasComment, setHasComment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  // console.log("comments", comments);

  // console.log("hasOrder", hasOrder, hasComment);
  useEffect(() => {
    const findHasOrder = orders

      ?.map((o) => o.paymentStatus === "approved" && o?.email)

      .includes(user?.email);
    if (findHasOrder) {
      setHasOrder(true);
    }

    // console.log("findHasOrder", findHasOrder);
    // console.log("orders", orders);

    const findHasComment = comments
      ?.map((c) => c.user.mail)
      .includes(user?.email);

    if (findHasComment) {
      setHasComment(true);
    }
  }, [comments, orders, user]);
  // console.log("user.email", user.email);
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
      Swal.fire("Log in to comment");
    } else if (!hasOrder) {
      Swal.fire("Necesitas comprar algo para comentar");
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
      Swal.fire("Por favor ingresa un comentario valido.");
      //alert("Por favor ingresa un comentario valido.");
      return;
    }

    try {
      const createComment = await axios.post(`${URL}/comments/create`, {
        content: commentText,
        email: user?.email,
      });
      Swal.fire({
        title: "Comentario guardado!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
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

      {isAuthenticated && hasOrder && !hasComment ? (
        <button
          className="rounded-xl mt-6 bg-black text-white border-2 border-gray-200 hover:border-gray-500 hover:bg-gray-800"
          onClick={handleButtonClick}
        >
          Deja tu comentario
        </button>
      ) : (
        <button
          className="rounded-xl mt-6 border-gray-200 hover:border-gray-400 border-2  bg-gray-200 text-white"
          disabled
        >
          Deja tu comentario
        </button>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className=" bg-white border-gray-100 border-1  p-6 rounded-lg shadow-lg modal-box">
            <form onSubmit={handleSubmit}>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h2 className="m-2 text-xl font-light" htmlFor="comment">
                Dejanos tu comentario
              </h2>
              <input
                type="text"
                id="comment"
                value={commentText}
                placeholder="Escribe aqui"
                className="m-2 p-2 w-full  bg-gray-50 border-1 border-gray-100"
                onChange={(e) => setCommentText(e.target.value)}
              />

              <button
                type="submit"
                className="bg-black text-white border-2 border-gray-600 hover:border-gray-100 hover:bg-gray-900 px-4 py-2 rounded-lg mt-4"
              >
                {" "}
                Guardar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;

// import React, { useState, useEffect } from "react";
// import { getComments } from "../../features/commentsSlice";
// import { useSelector } from "react-redux";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import { getOrders } from "../../features/ordersSlice";

// const URL = import.meta.env.VITE_URL;
// const INTERVAL_DELAY = 2000;

// function Comments() {
//   // const user = JSON.parse(localStorage.getItem("user"));
//   const orders = useSelector(getOrders);
//   const comments = useSelector(getComments) || [];
//   const { user, isAuthenticated } = useAuth0();
//   const [hasOrder, setHasOrder] = useState(false);
//   const [hasComment, setHasComment] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [commentText, setCommentText] = useState("");
//   const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
//   // console.log("comments", comments);

//   // console.log("hasOrder", hasOrder, hasComment);
//   useEffect(() => {
//     const findHasOrder = orders

//       ?.map((o) => o.paymentStatus === "approved" && o?.email)

//       .includes(user?.email);
//     if (findHasOrder) {
//       setHasOrder(true);
//     }

//     // console.log("findHasOrder", findHasOrder);
//     // console.log("orders", orders);

//     const findHasComment = comments
//       ?.map((c) => c.user.mail)
//       .includes(user?.email);

//     if (findHasComment) {
//       setHasComment(true);
//     }
//   }, [comments, orders, user]);
//   // console.log("user.email", user.email);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * comments.length);
//       setCurrentCommentIndex(randomIndex);
//     }, INTERVAL_DELAY);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [comments.length]);

//   const handleButtonClick = () => {
//     if (!isAuthenticated) {
//       alert("Log in to comment");
//     } else if (!hasOrder) {
//       alert("Necesitas comprar algo para comentar");
//     } else if (!hasComment) {
//       setShowModal(true);
//     } else {
//       const shuffledComments = shuffleArray(comments);
//       const randomIndex = Math.floor(Math.random() * shuffledComments.length);
//       setCurrentCommentIndex(randomIndex);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!commentText.trim()) {
//       alert("Please enter a valid comment.");
//       return;
//     }

//     try {
//       const createComment = await axios.post(`${URL}/comments/create`, {
//         content: commentText,
//         email: user?.email,
//       });

//       setCommentText("");
//       setShowModal(false);
//       setHasComment(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const renderComments = () => {
//     return (
//       <ul>
//         <li>
//           <h2 className="text-black text-xl font-bold">{`"${comments[currentCommentIndex]?.content}"`}</h2>{" "}
//           <h3 className="text-gray-400">{` - ${comments[currentCommentIndex]?.user?.user} `}</h3>
//         </li>
//       </ul>
//     );
//   };

//   return (
//     <div className="m-6 mt-9 mb-9 text-center">
//       {renderComments()}

//       {isAuthenticated && hasOrder && !hasComment ? (
//         <button
//           className="rounded-xl mt-6 bg-black text-white border-2 border-gray-200 hover:border-gray-500 hover:bg-gray-800"
//           onClick={handleButtonClick}
//         >
//           Deja tu comentario
//         </button>
//       ) : (
//         <button
//           className="rounded-xl mt-6 border-gray-200 hover:border-gray-400 border-2  bg-gray-200 text-white"
//           disabled
//         >
//           Deja tu comentario
//         </button>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className=" bg-white border-gray-100 border-1  p-6 rounded-lg shadow-lg modal-box">
//             <form onSubmit={handleSubmit}>
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               >
//                 ✕
//               </button>
//               <h2 className="m-2 text-xl font-light" htmlFor="comment">
//                 Dejanos tu comentario
//               </h2>
//               <input
//                 type="text"
//                 id="comment"
//                 value={commentText}
//                 placeholder="Escribe aqui"
//                 className="m-2 p-2 w-full  bg-gray-50 border-1 border-gray-100"
//                 onChange={(e) => setCommentText(e.target.value)}
//               />

//               <button
//                 type="submit"
//                 className="bg-black text-white border-2 border-gray-600 hover:border-gray-100 hover:bg-gray-900 px-4 py-2 rounded-lg mt-4"
//               >
//                 {" "}
//                 Guardar{" "}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Comments;
