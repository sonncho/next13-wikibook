import type { Meta, StoryObj } from '@storybook/react';
import InputLabel from '.';
import Input from '../Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Label',
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    return (
      <div>
        <InputLabel htmlFor="hi" {...args} />
        <Input />
      </div>
    );
  },
};
