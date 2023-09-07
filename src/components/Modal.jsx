import React, { useEffect } from "react";

const Modal = ({ isOpen, closeModal }) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isOpen && e.target.classList.contains("modal-overlay")) {
                closeModal();
            }
        };

        window.addEventListener("click", handleOutsideClick);

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [isOpen, closeModal]);

    return (
        <div
            className={`fixed inset-10 flex items-center justify-center z-50 transition-opacity ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="modal-overlay transition-opacity duration-300"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto transform transition-transform duration-300">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Ranbir Singh</p>
                        <button className="modal-close" onClick={closeModal}>
                            <svg
                                className="fill-current text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                            >
                                <path d="M6.293 6.293a1 1 0 011.414 0L9 7.586l1.293-1.293a1 1 0 111.414 1.414L10.414 9l1.293 1.293a1 1 0 11-1.414 1.414L9 10.414l-1.293 1.293a1 1 0 01-1.414-1.414L7.586 9 6.293 7.707a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <p>Cab 34</p>
                        <p>Toyota Camry</p>
                        <p>+1 306 000 0000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
