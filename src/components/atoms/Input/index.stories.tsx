import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';
import Stack from '~/components/layout/Stack';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    inputProps: {
      'aria-label': 'description',
    },
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    return (
      <Stack $spacing={3} $useFlexGap>
        <Input {...args} defaultValue={'Hello Input'} />
        <Input {...args} placeholder="Placeholder" />
        <Input {...args} disabled placeholder="Disabled" />
        <Input {...args} error placeholder="Error" />
      </Stack>
    );
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Please Enter',
    fullWidth: true,
  },
  render: (args) => (
    <Stack>
      <Input {...args} />
    </Stack>
  ),
};
