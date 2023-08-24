import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import Button from '~/components/atoms/Button';
import Box from '~/components/layout/Box';
import Stack from '~/components/layout/Stack';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicButton: Story = {
  args: {
    $color: 'primary',
  },
  render: (args) => (
    <Stack $spacing={2} $direction={'row'}>
      <Button $variant="text" {...args}>
        TEXT
      </Button>
      <Button $variant="contained" {...args}>
        CONTAINED
      </Button>
      <Button $variant="outlined" {...args}>
        OUTLINED
      </Button>
    </Stack>
  ),
};

export const Color: Story = {
  args: {
    $size: 'medium',
    $variant: 'contained',
  },
  render: (args) => (
    <Stack $spacing={2} $direction={'row'}>
      <Button $color={'primary'} {...args}>
        PRIMARY
      </Button>
      <Button $color={'secondary'} {...args}>
        SECONDARY
      </Button>
      <Button $color={'info'} {...args}>
        INFO
      </Button>
      <Button $color={'success'} {...args}>
        SUCCESS
      </Button>
      <Button $color={'warning'} {...args}>
        WARNING
      </Button>
      <Button $color={'error'} {...args}>
        ERROR
      </Button>
    </Stack>
  ),
};

export const Size: Story = {
  args: {
    $size: 'medium',
  },
  render: (args) => {
    const argsObj = ['small', 'medium', 'large'];
    const StyledBox = styled(Box)`
      & button {
        margin: 0.5rem;
      }
    `;

    return (
      <StyledBox>
        <div>
          {argsObj.map((value) => (
            <Button key={`text-${value}`} {...args} $size={value as 'small' | 'medium' | 'large'}>
              {value.toUpperCase()}
            </Button>
          ))}
        </div>
        <div>
          {argsObj.map((value) => (
            <Button
              key={`outlined-${value}`}
              {...args}
              $variant="outlined"
              $size={value as 'small' | 'medium' | 'large'}
            >
              {value.toUpperCase()}
            </Button>
          ))}
        </div>
        <div>
          {argsObj.map((value) => (
            <Button
              key={`contained-${value}`}
              {...args}
              $variant="contained"
              $size={value as 'small' | 'medium' | 'large'}
            >
              {value.toUpperCase()}
            </Button>
          ))}
        </div>
      </StyledBox>
    );
  },
};
