import React from 'react';
import NotificationItem from './NotificationItem';

type Notification = {
  id: string;
  message: string;
  isRead: boolean;
};

type NotificationMenuProps = {
  notifications: Notification[];
  onNotificationClick: (id: string) => void;
};

const NotificationMenu = ({
  notifications,
  onNotificationClick,
}: NotificationMenuProps): React.ReactElement => {
  return (
    <>
      {notifications.map((n) => (
        <NotificationItem
          key={n.id}
          id={n.id}
          message={n.message}
          isRead={n.isRead}
          onClick={onNotificationClick}
        />
      ))}
    </>
  );
};

export default NotificationMenu;
