import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import NotificationFAB from './NotificationFAB';
import NotificationItem from './NotificationItem';
import NotificationMenu from './NotificationMenu';
import NotificationMenuWrapper from './NotificationMenuWrapper';
import NotificationModal from './NotificationModal';
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

// --- NotificationModal Standalone ---
export const ModalOpen = () => (
  <NotificationModal
    isOpen={true}
    onClose={() => alert('Modal closed')}
    message="📦 Load #321 arrived at MASA and is currently being staged for Joint Inspection."
    timestamp="2025-08-06 14:20"
  />
);

export const ModalClosed = () => (
  <NotificationModal
    isOpen={false}
    onClose={() => alert('Modal closed')}
    message="This text will not be visible because the modal is closed."
  />
);

// --- Full Interactive Composition ---
export const WithMenu = () => {
  const { isOpen, toggleOpen, close } = useNotificationState();

  const [notifications, setNotifications] = useState(mockNotifications);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<null | {
    id: string;
    message: string;
    isRead: boolean;
    timestamp?: string;
  }>(null);

  const handleNotificationClick = (id: string) => {
    const clicked = notifications.find((n) => n.id === id);
    if (!clicked) return;

    // Open modal and mark as read
    setSelectedNotification(clicked);
    setModalOpen(true);
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedNotification(null);
  };

  const hasUnread = notifications.some((n) => !n.isRead);

  return (
    <>
      <NotificationFAB isOpen={isOpen} onClick={toggleOpen} hasUnread={hasUnread} />
      <NotificationMenuWrapper isOpen={isOpen} onClose={close}>
        <NotificationMenu
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
        />
      </NotificationMenuWrapper>
      <NotificationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        message={selectedNotification?.message || ''}
        timestamp="2025-08-06 14:20"
      />
    </>
  );
};
