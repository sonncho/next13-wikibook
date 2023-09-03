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

const Item = styled(Paper)`
  padding: 1.2rem;
  & + & {
    margin-top: 0.75rem;
  }
`;

export const Elevation: Story = {
  args: {
    variant: 'elevation',
  },
  render: (args) => {
    return (
      <Stack $direction={'column'}>
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <Item key={elevation} elevation={elevation} {...args}>{`elevation=${elevation}`}</Item>
        ))}
      </Stack>
    );
  },
};
