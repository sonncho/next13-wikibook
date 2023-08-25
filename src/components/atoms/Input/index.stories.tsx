import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
  args: {
    placeholder: 'Please Enter...',
  },
  render: (args) => <Input {...args} />,
};
