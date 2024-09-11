import { useEffect } from 'react'
import { useModal } from './ModalContext';
// import banner from "../assets/images/banner.jpeg"


const Model = () => {

    const { modalOpen, setModalOpen } = useModal();

    useEffect(() => {

        setModalOpen(true);

    }, []);



    const closeModal = () => {
        setModalOpen(false);
    };



    

    return (
        <>
            <div className=' ' >
                {modalOpen && (
                    <>
                        <div className=" fixed top-0 left-0   flex justify-center  items-center  w-screen h-screen z-[9999] text-left  bg-transparent " onClick={closeModal} >

                            <dialog id="my_modal_4" className="  w-full   modal z-[99] bg-transparent " open={modalOpen}>
                                <div className=" relative flex  justify-center items-center " >

                                    <div className="bg-gray-700 relative phone:mx-3 max-w-[40rem] text-white p-4 rounded-md shadow-md">
                                        <h2 className="text-2xl font-semibold mb-2   ">Disclaimer</h2>
                                        <p className="mb-4 phone:text-sm ">
                                            Smart BC Concept uses smart contracts on a blockchain to distribute rewards transparently. Participation involves financial risks, and purchased slots are non-refundable. Receiving BC rewards may take time as it depends on community growth. Past performance doesn't guarantee future results. Please understand the platform fully and consult a financial advisor before participating.
                                        </p>
                                        <h2 className="text-xl font-semibold mb-2">Security Reminder:</h2>
                                        <p className="mb-4">
                                            Please use only our official website: <a href="http://smartbcconcept.io" className="text-blue-500 underline">smartbcconcept.io</a> & <a href="http://smartbcconcept.net" className="text-blue-500 underline">smartbcconcept.net</a> Be cautious of fake sites.
                                        </p>
                                        <h3 className="text-lg font-semibold mb-2">Steps to Verify:</h3>
                                        <ul className="list-disc pl-5 mb-4">
                                            <li><strong>URL Check:</strong> Ensure it’s <a href="http://smartbcconcept.io" className="text-blue-500 underline">smartbcconcept.io</a> & <a href="http://smartbcconcept.net" className="text-blue-500 underline">smartbcconcept.net</a></li>
                                            <li><strong>Secure Connection:</strong> Look for "https://" and the padlock icon (🔒).</li>
                                            <li><strong>Official Logo:</strong> Confirm our logo is present.</li>
                                        </ul>
                                        <p>
                                            Report any suspicious sites immediately. Your security is our priority.
                                        </p>

                                        <div className="  rounded-3xl absolute -top-2 -right-2">
                                            <form method="  ">

                                                <button className=" bg-gray-500 px-3 py-3 rounded-full" onClick={() => setModalOpen(false)}>
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
                                            </form>
                                        </div>
                                    </div>



                                </div>
                            </dialog>
                        </div>
                    </>
                )}
            </div>


        </>
    )
}

export default Model