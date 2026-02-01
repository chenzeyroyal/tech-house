import ToastNotification from "../ToastNotification";
import styles from "./NotificationContainer.module.scss";

const NotificationContainer = (props) => {
  const { notifications, onRemove } = props;

  return (
    <div className={styles.notificationContainer}>
      {notifications.length > 0 &&
        notifications.map((notification) => (
          <ToastNotification
            key={notification.id}
            {...notification}
            onClose={() => onRemove()}
          />
        ))}
    </div>
  );
};

export default NotificationContainer;
