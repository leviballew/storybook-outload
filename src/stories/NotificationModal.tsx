import React from 'react';
import styles from './NotificationFAB.module.css';

type NotificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  timestamp?: string;
};

const NotificationModal = ({
  isOpen,
  onClose,
  message,
  timestamp,
}: NotificationModalProps): React.ReactElement | null => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Notification Details</h3>
        <p>{message}</p>
        {timestamp && <p className={styles.timestamp}>📅 {timestamp}</p>}
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
