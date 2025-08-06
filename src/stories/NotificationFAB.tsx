import React from 'react';
import styles from './NotificationFAB.module.css';

type NotificationFABProps = {
  onClick: () => void;
  hasUnread?: boolean;
};

const NotificationFAB: React.FC<NotificationFABProps> = ({ onClick, hasUnread = false }) => {
  return (
    <button className={styles.fab} onClick={onClick} aria-label="Notifications">
      🔔
      {hasUnread && <span className={styles.badge} />}
    </button>
  );
};

export default NotificationFAB;
