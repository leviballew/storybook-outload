import type { Meta } from '@storybook/react-vite';
import NotificationFAB from './NotificationFAB';
import NotificationMenuWrapper from './NotificationMenuWrapper';
import useNotificationState from './useNotificationState';

const meta: Meta = {
  title: 'Components/NotificationFAB',
  component: NotificationFAB,
};
export default meta;

export const WithMenu = () => {
  const { isOpen, toggleOpen, close } = useNotificationState();

  return (
    <>
      <NotificationFAB isOpen={isOpen} onClick={toggleOpen} hasUnread />
      <NotificationMenuWrapper isOpen={isOpen} onClose={close}>
        <div>📦 Load #321 arrived at MASA</div>
        <div>📦 Load #087 departed CFA</div>
        <div>📦 Load #672 ready for inspection</div>
      </NotificationMenuWrapper>
    </>
  );
};

