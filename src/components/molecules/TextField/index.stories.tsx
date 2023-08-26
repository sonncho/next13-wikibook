import type { Meta, StoryObj } from '@storybook/react';
import TextField from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Molecules/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  // args: {
  //   inputProps: {
  //     'aria-label': 'description',
  //   },
  // },
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    return <TextField {...args} />;
  },
};
