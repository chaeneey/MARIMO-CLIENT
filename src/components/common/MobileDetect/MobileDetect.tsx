"use client"
import { useEffect, useState } from "react"

import AccessRestrictModal from "../AccessRestrictModal/AccessRestrictModal";
import Modal from "../Modal/Modal";

const MobileDetect = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
    setShowModal(false);
  };

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        const alreadyChecked = localStorage.getItem("access_checked");

        if (isMobile && !alreadyChecked) {
            setShowModal(true);
            localStorage.setItem("access_checked", "true");
        }
    }, [])

     if (!showModal) return null;
  return (
    <Modal onClose={handleModalClose}>
        <AccessRestrictModal onClose={handleModalClose}/>
    </Modal>
  )
}

export default MobileDetect