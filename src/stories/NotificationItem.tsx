import React from 'react';
import styles from './NotificationFAB.module.css';

type NotificationItemProps = {
  id: string;
  message: string;
  isRead: boolean;
  onClick: (id: string) => void;
};

const NotificationItem = ({
  id,
  message,
  isRead,
  onClick,
}: NotificationItemProps): React.ReactElement => {
  return (
    <div
      className={`${styles.notificationItem} ${isRead ? styles.read : styles.unread}`}
      onClick={() => onClick(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(id)}
    >
      <span className={styles.message}>{message}</span>
      {!isRead && <span className={styles.dot} />}
    </div>
  );
};

export default NotificationItem;
