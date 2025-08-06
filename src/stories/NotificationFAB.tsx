// import React from 'react';
import styles from './NotificationFAB.module.css';

type NotificationFABProps = {
  isOpen: boolean;
  onClick: () => void;
  hasUnread?: boolean;
};

const NotificationFAB = ({ isOpen, onClick, hasUnread = false }: NotificationFABProps) => {
  return (
    <button className={`${styles.fab} ${isOpen ? styles.open : ''}`} onClick={onClick} aria-label="Notifications">
      {isOpen ? '✖️' : '🔔'}
      {hasUnread && !isOpen && <span className={styles.badge} />}
    </button>
  );
};

export default NotificationFAB;
