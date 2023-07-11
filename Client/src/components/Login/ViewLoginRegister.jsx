import Login from "./Login";
import Register from "./Regiter";
import { useState, useRef, useEffect } from "react";

function ViewLoginRegister() {
    const [loginOrRegister, setLoginOrRegister] = useState(true);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const modalRef = useRef(null);

    const handleLoginOrRegister = () => {
        setLoginOrRegister((prevState) => !prevState);
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isOpenModal) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpenModal]);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLoginOrRegister}
            >
                Abrir modal
            </button>

            {isOpenModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={closeModal}></div> {/* Fondo oscuro */}

                    <div className="bg-white p-4 rounded shadow-md w-[50%] mx-auto relative z-10" ref={modalRef}>
                        {loginOrRegister ? (
                            <Login handleLoginOrRegister={handleLoginOrRegister} />
                        ) : (
                            <Register handleLoginOrRegister={handleLoginOrRegister} />
                        )}

                        {/* <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewLoginRegister;
