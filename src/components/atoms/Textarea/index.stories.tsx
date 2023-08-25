import type { Meta, StoryObj } from '@storybook/react';
import Textarea from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Textarea',
  component: Textarea,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
  args: {
    placeholder: 'Please Enter...',
  },
  render: (args) => <Textarea {...args} />,
};
