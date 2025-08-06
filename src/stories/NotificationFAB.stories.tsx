import React from 'react';
import type { Meta } from '@storybook/react-vite';
import NotificationFAB from './NotificationFAB';
import NotificationItem from './NotificationItem';
import NotificationMenu from './NotificationMenu';
import NotificationMenuWrapper from './NotificationMenuWrapper';
import useNotificationState from './useNotificationState';

const mockNotifications = [
  { id: '1', message: '📦 Load #321 arrived at MASA', isRead: false },
  { id: '2', message: '📦 Load #087 departed CFA', isRead: true },
  { id: '3', message: '📦 Load #672 ready for inspection', isRead: false },
];

const meta: Meta = {
  title: 'Notifications/NotificationFAB',
  component: NotificationFAB,
};
export default meta;

// --- FAB Variants ---
export const FAB_Closed = () => (
  <NotificationFAB isOpen={false} onClick={() => alert('FAB clicked')} hasUnread />
);

export const FAB_Open = () => (
  <NotificationFAB isOpen={true} onClick={() => alert('FAB clicked')} hasUnread />
);

// --- NotificationItem Variants ---
export const ItemUnread = () => (
  <NotificationItem
    id="1"
    message="📦 Load #999 is staged at AHA"
    isRead={false}
    onClick={() => alert('Unread item clicked')}
  />
);

export const ItemRead = () => (
  <NotificationItem
    id="2"
    message="📦 Load #888 departed CFA"
    isRead={true}
    onClick={() => alert('Read item clicked')}
  />
);

// --- NotificationMenu Standalone ---
export const MenuWithItems = () => (
  <div style={{ width: 300, padding: 12, backgroundColor: '#fff' }}>
    <NotificationMenu
      notifications={mockNotifications}
      onNotificationClick={(id) => alert(`Clicked notification ${id}`)}
    />
  </div>
);

// --- Full Interactive Composition ---
export const WithMenu = () => {
  const { isOpen, toggleOpen, close } = useNotificationState();

  const handleNotificationClick = (id: string) => {
    alert(`Notification ${id} clicked`);
  };

  return (
    <>
      <NotificationFAB isOpen={isOpen} onClick={toggleOpen} hasUnread />
      <NotificationMenuWrapper isOpen={isOpen} onClose={close}>
        <NotificationMenu
          notifications={mockNotifications}
          onNotificationClick={handleNotificationClick}
        />
      </NotificationMenuWrapper>
    </>
  );
};
