import { useState, useRef } from "react";

const useNotifications = () => {
  const [notifications, setNotification] = useState([]);

  const timerId = useRef(null);
  const duration = 5000;

  const addNotification = (params) => {
    const id = crypto.randomUUID();
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    setNotification([{ id, duration, ...params }]);

    timerId.current = setTimeout(() => {
      removeNotification();
    }, duration + 200);
  };

  const removeNotification = () => {
    setNotification([]);
  };

  return { notifications, addNotification, removeNotification };
};

export default useNotifications;
