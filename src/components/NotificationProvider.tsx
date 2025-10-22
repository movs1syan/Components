import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

type NotificationType = "success" | "error" | "info" | "warning";

interface Notification {
  id: string;
  message: string;
  description?: string;
  type: NotificationType;
}

interface NotificationContextType {
  show: (notification: Omit<Notification, "id">) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider")
  }
  return context;
};

export const NotificationProvider: React.FC<{ children:React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const show = (notification: Omit<Notification, "id">) => {
    const id = uuid();
    setNotifications((prev) => [...prev, {...notification, id}]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 3000);
  };

  const hide = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ show }}>
      {children}

      <style>{`
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(100%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100%); }
        }
      `}</style>

      {/* Notification container */}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-10">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`relative w-80 p-4 rounded-xl shadow-lg text-white animate-[slideInRight_0.4s_ease_forwards]
              ${notification.type === "success" ? "bg-green-500"
                : notification.type === "error" ? "bg-red-500" 
                : notification.type === "warning" ? "bg-yellow-500"
                : "bg-blue-500"}
            `}
          >
            <div className="font-semibold">{notification.message}</div>
            {notification.description && <div className="text-sm opacity-90">{notification.description}</div>}
            <button
              onClick={() => hide(notification.id)}
              className="absolute top-2 right-4 text-white opacity-70 hover:opacity-100 cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};