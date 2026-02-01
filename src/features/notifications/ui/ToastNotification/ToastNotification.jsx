import Button from "@/shared/ui/Button";
import styles from "./ToastNotification.module.scss";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const ToastNotification = (props) => {
  const {
    /*
    'add' (defalt) || 'delete'
    */
    type = "add",
    message,
    button,
    duration,
    onClose,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const timerId = useRef(null);

  const { pathname } = useLocationController();
  const prevLocationRef = useRef(pathname);

  useEffect(() => {
    if (prevLocationRef.current !== pathname) {
      setIsVisible(false);
      setTimeout(onClose, 200);
    }
    prevLocationRef.current = pathname;
  }, [pathname, onClose]);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));

    timerId.current = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timerId.current);
    };
  }, []);

  const handleAction = () => {
    if (button) {
      setIsVisible(false);
      button.action();
      setTimeout(onClose, 200);
    }
  };

  return (
    <div
      className={classNames(styles.toast, isVisible && styles.visible)}
      style={{ "--toast-duration": `${duration / 1000}s` }}
    >
      <div className={styles.body}>
        <span>{message}</span>
        {button && (
          <Button
            label={button.label}
            to={button.href}
            icon={button.icon}
            onClick={button.href ? undefined : handleAction}
            mode="circle"
            isAccent
            isLabelHidden
          />
        )}
      </div>
      {type === "delete" && (
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      )}
    </div>
  );
};

export default ToastNotification;
