import { type Meta, type StoryObj } from '@storybook/react';
import Select from '.';

const meta = {
  title: 'Components/Molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  decorators: [(StoryFn) => <StoryFn />],
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: (args) => <Select {...args} />,
};
