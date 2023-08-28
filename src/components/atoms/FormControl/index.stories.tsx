import type { Meta, StoryObj } from '@storybook/react';
import FormControl from '.';
import InputLabel from '../InputLabel';
import Input from '../Input';
import FormHelperText from '../FormHelperText';

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
    // layout: 'centered',
  },
  render: (args) => {
    return (
      <FormControl {...args}>
        <InputLabel htmlFor="label">Label</InputLabel>
        <Input placeholder="hi" />
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
    );
  },
};
