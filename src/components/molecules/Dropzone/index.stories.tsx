import { type Meta, type StoryObj } from '@storybook/react';
import Dropzone from '.';

const meta = {
  title: 'Components/Molecules/Dropzone',
  component: Dropzone,
  // parameters: {
  //   layout: 'left',
  // },
  decorators: [(StoryFn) => <StoryFn />],
  tags: ['autodocs'],
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: (args) => {
    return <Dropzone {...args} />;
  },
};
