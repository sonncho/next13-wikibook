import { type Meta, type StoryObj } from '@storybook/react';
import Badge from '.';
import { MdAdd, MdOutlineMailOutline, MdRemove } from 'react-icons/md';
import Stack from '~/components/layout/Stack';
import React, { useState } from 'react';
import Box from '~/components/layout/Box';
import Button from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  decorators: [(StoryFn) => <StoryFn />],
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: 'primary',
    badgeContent: 999,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
  },
  render: ({ children, ...rest }) => (
    <Badge {...rest}>
      <MdOutlineMailOutline />
    </Badge>
  ),
};

export const Color: Story = {
  args: {
    badgeContent: 4,
  },
  render: (args) => (
    <Stack $direction={'row'} $spacing={4}>
      <Badge {...args} color="warning">
        <MdOutlineMailOutline />
      </Badge>
      <Badge {...args} color="success">
        <MdOutlineMailOutline />
      </Badge>
      <Badge {...args} color="info">
        <MdOutlineMailOutline />
      </Badge>
    </Stack>
  ),
};

export const BadgeVisibility: Story = {
  render: () => {
    const [count, setCount] = useState(1);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
      setInvisible(!invisible);
    };
    return (
      <Box>
        <Stack $spacing={8}>
          <Badge badgeContent={count} showZero>
            <MdOutlineMailOutline />
          </Badge>
          <div>
            <Button
              aria-label="reduce"
              $variant="outlined"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <MdRemove />
            </Button>
            <Button
              aria-label="increase"
              $variant="outlined"
              onClick={() => {
                setCount(Math.max(count + 1));
              }}
            >
              <MdAdd />
            </Button>
          </div>
        </Stack>
        <div>
          <Badge variant="dot" invisible={invisible}>
            <MdOutlineMailOutline />
          </Badge>
        </div>
      </Box>
    );
  },
};

export const MaximumValue: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <Stack $spacing={9}>
      <Badge {...args} badgeContent={99}>
        <MdOutlineMailOutline />
      </Badge>
      <Badge {...args} badgeContent={100}>
        <MdOutlineMailOutline />
      </Badge>
      <Badge {...args} badgeContent={1000} max={999}>
        <MdOutlineMailOutline />
      </Badge>
    </Stack>
  ),
};
