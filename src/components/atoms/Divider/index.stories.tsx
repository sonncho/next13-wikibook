import type { Meta, StoryObj } from '@storybook/react';
import Divider from '.';
import Container from '~/components/layout/Container';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
Sed malesuada lobortis pretium.`;

export const DividerWithText: Story = {
  // args: {

  // },
  render: (args) => (
    <Container>
      {content}
      <Divider {...args}>CENTER</Divider>
      {content}
      <Divider {...args} $textAlign="left">
        LEFT
      </Divider>
      {content}
      <Divider {...args} $textAlign="right">
        LEFT
      </Divider>
    </Container>
  ),
};
