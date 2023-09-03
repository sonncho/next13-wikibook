import { type Meta, type StoryObj } from '@storybook/react';
import styled from 'styled-components';
import Paper from '.';
import Stack from '~/components/layout/Stack';

const meta = {
  title: 'Components/Atoms/Paper',
  component: Paper,
  decorators: [(StoryFn) => <StoryFn />],
  tags: ['autodocs'],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

const StyledStack = styled(Stack)`
  flex-wrap: 'wrap';
  & > :not(style) {
    margin: 0.45rem;
    width: 128px;
    height: 128px;
  }
`;

export const Basic: Story = {
  args: {},
  render: (args) => {
    return (
      <StyledStack>
        <Paper {...args} elevation={0} />
        <Paper {...args} />
        <Paper {...args} elevation={3} />
      </StyledStack>
    );
  },
};

export const Variants: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => {
    return (
      <StyledStack>
        <Paper {...args} square />
        <Paper {...args} />
      </StyledStack>
    );
  },
};
