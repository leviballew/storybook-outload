import React, { useRef } from 'react';
import useOutsideClick from './useOutsideClick';
import styles from './NotificationFAB.module.css';

type NotificationMenuWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const NotificationMenuWrapper = ({ isOpen, onClose, children }: NotificationMenuWrapperProps): React.ReactElement | null => {
  const ref = useRef<HTMLDivElement>(null);


  useOutsideClick(ref, onClose);

  if (!isOpen) return null;

  return (
    <div ref={ref} className={styles.menuWrapper}>
      {children}
    </div>
  );
};

export default NotificationMenuWrapper;
