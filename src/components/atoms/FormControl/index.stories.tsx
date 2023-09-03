import type { Meta, StoryObj } from '@storybook/react';
import FormHelperText from '../FormHelperText';
import Input from '../Input';
import InputLabel from '../InputLabel';
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
    // layout: 'centered',
  },
  render: (args) => {
    return (
      <FormControl {...args}>
        <InputLabel htmlFor="component-helper">Label</InputLabel>
        <Input placeholder="hi" id="component-helper" aria-describedby="component-helper-text" />
        <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
      </FormControl>
    );
  },
};
