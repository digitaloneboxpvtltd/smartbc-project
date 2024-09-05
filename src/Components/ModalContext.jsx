// ModalContext.js
import { createContext, useContext, useEffect, useState } from 'react';

// Create Context
const ModalContext = createContext();

// Context Provider Component
export const ModalProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    // useEffect(() => {
    //     if (modalOpen === true) {
    //         document.body.style.overflow = 'hidden';
             
    //     } else {
    //         // Re-enable scrolling when the modal is closed
    //         document.body.style.overflowY = 'auto';
             
    //         // Cleanup function to restore default overflow when component unmounts
    //         return () => {
    //             document.body.style.overflowY = 'auto';
    //         };
    //     }
    // }, [modalOpen])

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

// Custom Hook to use the Modal Context
export const useModal = () => {
    return useContext(ModalContext);
};

