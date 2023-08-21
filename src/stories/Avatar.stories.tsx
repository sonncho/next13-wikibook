import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '~/components/atoms/Avatar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // primary: true,
    children: 'G',
    $bgColor: '#ba90ff',
  },
};
