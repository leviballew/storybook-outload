import { useState } from 'react';

const useNotificationState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return { isOpen, toggleOpen, close };
};

export default useNotificationState;
