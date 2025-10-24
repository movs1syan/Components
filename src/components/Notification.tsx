import React from "react";
import { createPortal } from "react-dom";

interface NotificationProps {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  onClose: (id: string) => void;
}

const Notification: React.FC<NotificationProps> = ({ notifications, onClose }) => {
  return createPortal(
    <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`relative w-80 p-4 rounded-xl shadow-lg text-white
            animate-[slideInRight_0.4s_ease_forwards]
            ${notification.type === "success" ? "bg-green-500"
              : notification.type === "error" ? "bg-red-500"
              : notification.type === "warning" ? "bg-yellow-500"
              : "bg-blue-500"
            }
          `}
        >
          <div className="font-semibold">{notification.message}</div>
          {notification.description && <div className="text-sm opacity-90">{notification.description}</div>}
          <button
            onClick={() => onClose(notification.id)}
            className="absolute top-2 right-4 text-white opacity-70 hover:opacity-100 cursor-pointer"
          >
            ✕
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
};

export default Notification;