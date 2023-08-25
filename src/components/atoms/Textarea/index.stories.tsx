import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import Typography from '../Typography';
import Textarea from '.';
import Box from '~/components/layout/Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Textarea',
  component: Textarea,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTextarea: Story = {
  args: {
    placeholder: 'Please Enter...',
  },
  render: (args) => <Textarea {...args} />,
};

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

export const Decorators: Story = {
  args: {
    placeholder: 'Please Enter...',
  },
  render: (args) => <TextareaWithDecorators {...args} />,
};
