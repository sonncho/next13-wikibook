import type { Meta, StoryObj } from '@storybook/react';

import Typography from '~/components/atoms/Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    // primary: true,
    children: 'Typography',
    $variant: 'h1',
  },
};
