import type { Meta, StoryObj } from '@storybook/react';
import FormControl from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/FormControl',
  component: FormControl,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    return <FormControl {...args} />;
  },
};
