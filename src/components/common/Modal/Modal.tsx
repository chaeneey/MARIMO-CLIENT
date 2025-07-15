"use client";

import { useEffect, useState, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import * as styles from "./Modal.css";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose, children }: PropsWithChildren<ModalProps>) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("modal");
    if (el) setPortalElement(el);
  }, []);

  if (!portalElement) return null;

  return createPortal(
    <>
      <div className={styles.backdropStyle} onClick={onClose} />
      <div
        className={styles.modalContentStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>,
    portalElement
  );
};

export default Modal;
