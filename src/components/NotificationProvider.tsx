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
  open: (notification: Omit<Notification, "id">) => void;
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

  const open = (notification: Omit<Notification, "id"> ) => {
    const id = uuid();
    setNotifications((prev) => [...prev, {...notification, id}]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 3000);
  };

  const remove = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ open }}>
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
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`relative w-80 p-4 rounded-xl shadow-lg text-white animate-[slideInRight_0.4s_ease_forwards]
              ${n.type === "success" ? "bg-green-500"
              : n.type === "error" ? "bg-red-500"
                : n.type === "warning" ? "bg-yellow-500"
                  : "bg-blue-500"}
            `}
          >
            <div className="font-semibold">{n.message}</div>
            {n.description && <div className="text-sm opacity-90">{n.description}</div>}
            <button
              onClick={() => remove(n.id)}
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