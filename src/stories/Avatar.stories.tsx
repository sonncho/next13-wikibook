import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '~/components/atoms/Avatar';
import Stack from '~/components/layout/Stack';

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

export const Variant: Story = {
  args: {
    src: 'https://picsum.photos/200/300',
    alt: '랜덤아바타 이미지',
    $width: 80,
    $height: 80,
  },
  render: (args) => (
    <Stack $spacing={3}>
      <Avatar {...args} $variant="circle" />
      <Avatar {...args} $variant="rounded" />
      <Avatar {...args} $variant="square" />
    </Stack>
  ),
};
