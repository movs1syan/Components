import React, { useEffect, useState } from 'react';
import { createPortal } from "react-dom";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  const [isVisible, setVisible] = useState(false);
  const [isMounted, setMounted] = useState(open);

  const portalRoot =
    document.getElementById("drawer-root") ||
    (() => {
      const el = document.createElement("div");
      el.id = "drawer-root";
      document.body.appendChild(el);
      return el;
    })();

  useEffect(() => {
    if(open) {
      setMounted(true);
      setVisible(true);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!isMounted) return null;

  return createPortal (
    <div className="fixed inset-0 z-10">

      <style>{`
        @keyframes slideInTop {
          0% { opacity: 0; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(30%); }
        }
        @keyframes slideOutTop {
          0% { opacity: 1; transform: translateY(30%); }
          100% { opacity: 0; transform: translateY(0); }
        }
      `}</style>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`} onClick={onClose}></div>

      {/* Modal */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl min-w-100 w-fit h-fit p-5
        ${isVisible
          ? "animate-[slideInTop_0.4s_ease_forwards]"
          : "animate-[slideOutTop_0.4s_ease_forwards]"
        } 
      `}>

        {/* Header */}
        <div className="flex justify-between">
          <div className="font-bold text-lg">{title}</div>
          <button className="font-bold text-gray-500 px-1.5 hover:text-black hover:bg-gray-300 transition cursor-pointer" onClick={onClose}>✕</button>
        </div>

        {/* Body */}
        <div className="h-[calc(100%-61px)]">
          <div className="py-4">
            {children}
          </div>
          <div className="flex gap-5 float-end">
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>OK</Button>
          </div>

        </div>
      </div>
    </div>,
    portalRoot,
  );
};

export default Modal;