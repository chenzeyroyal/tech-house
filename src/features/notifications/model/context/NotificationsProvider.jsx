import NotificationContainer from "../../ui/NotificationContainer";
import { NotificationsContext } from "./NotificationsContext";
import useNotifications from "../hooks/useNotifications";

export const NotificationsProvider = (props) => {
  const { children } = props;

  const { notifications, addNotification, removeNotification } =
    useNotifications();

  return (
    <NotificationsContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
      <NotificationContainer
        notifications={notifications}
        onRemove={removeNotification}
      />
    </NotificationsContext.Provider>
  );
};
