import { useEffect, useState } from 'react'

import maint from "../assets/images/maintainence.svg"

const MaintainenceModel = () => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setModalOpen(true); // Open modal on first render
    }, []);

    const closeModal = () => {
        setModalOpen(false); // Close the modal
    };

    return (
        <div>
            {modalOpen && (
                <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-[9999] text-left bg-gray-900 bg-opacity-50">
                    <div className="relative flex justify-center items-center">
                        <div className="bg-gray-700 relative max-w-fit mx-4 text-white p-4 rounded-md shadow-md">
                            <h2 className="text-2xl uppercase text-center  font-semibold mb-2 text-red-500 ">maintainence </h2>
                            <p className="mb-4 mt-2 text-2xl font-normal   text-center">
                                 6 hour maintainence
                            </p>
                            <img src={maint} className='w-[25rem] rounded-md' alt="" />

                            <p className="mb-4 mt-3 text-xl text-center">
                                 We apologize for any inconvenience  
                            </p>
                             
                             

                            <button
                                className="absolute -top-2 -right-2 text-black bg-[#86F3D8] p-2 rounded-full"
                                onClick={closeModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MaintainenceModel;
