import type { Meta, StoryObj } from '@storybook/react-vite';
import NotificationFAB from './NotificationFAB';

const meta: Meta<typeof NotificationFAB> = {
  title: 'Components/NotificationFAB',
  component: NotificationFAB,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotificationFAB>;

export const Default: Story = {
  args: {
    onClick: () => alert('Notifications clicked!'),
    hasUnread: false,
  },
};

export const WithUnread: Story = {
  args: {
    onClick: () => alert('Notifications clicked!'),
    hasUnread: true,
  },
};
