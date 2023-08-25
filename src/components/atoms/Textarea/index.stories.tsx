import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import Typography from '../Typography';
import Textarea from '.';
import Box from '~/components/layout/Box';
import Stack from '~/components/layout/Stack';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

//* Basic
export const Basic: Story = {
  args: {
    placeholder: 'Please Enter...',
  },
  render: (args) => <Textarea {...args} />,
};

//* Size
export const Size: Story = {
  args: {
    rows: 2,
    minRows: 2,
    maxRows: 5,
  },
  render: (args) => (
    <Stack $spacing={2} $direction={{ xs: 'column', sm: 'row' }} $alignItems={'center'} $useFlexGap>
      <Textarea {...args} size="small" placeholder="Small" />
      <Textarea {...args} placeholder="Medium" />
      <Textarea {...args} size="large" placeholder="Large" />
    </Stack>
  ),
};

//* Decorator
const TextareaWithDecorators = ({ ...args }) => {
  const [text, setText] = useState('');
  const addEmoji = (emoji: string) => () => setText(`${text}${emoji}`);
  return (
    <Textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter Text..."
      startDecorator={
        <Box $display={'flex'} $gap={3}>
          <Button $variant="outlined" $color={'secondary'} $size={'small'} onClick={addEmoji('👍')}>
            👍
          </Button>
          <Button $variant="outlined" $color={'secondary'} $size={'small'} onClick={addEmoji('🏖')}>
            🏖
          </Button>
          <Button $variant="outlined" $color={'secondary'} $size={'small'} onClick={addEmoji('❤️')}>
            ❤️
          </Button>
        </Box>
      }
      endDecorator={
        <Typography $variant={'caption'} style={{ marginLeft: 'auto' }}>
          {text.length} character(s)
        </Typography>
      }
      {...args}
    />
  );
};

export const WithDecorators: Story = {
  args: {
    placeholder: 'Please Enter...',
  },
  render: (args) => <TextareaWithDecorators {...args} />,
};
