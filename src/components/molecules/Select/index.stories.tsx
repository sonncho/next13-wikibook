import { type Meta, type StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import Select from '.';
import FormControl from '~/components/atoms/FormControl';
import InputLabel from '~/components/atoms/InputLabel';
import MenuItem from '~/components/atoms/MenuItem';

const meta = {
  title: 'Components/Molecules/Select',
  component: Select,
  // parameters: {
  //   layout: 'left',
  // },
  decorators: [(StoryFn) => <StoryFn />],
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: (args) => {
    const [age, setAge] = useState('');
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setAge(e.target.value);
    };
    return (
      <FormControl>
        <InputLabel id="demo-simple-select-standard">Age</InputLabel>
        <Select labelId="demo-simple-select-standard" onChange={handleChange} {...args}>
          <MenuItem value={10}>None</MenuItem>
          <MenuItem value={20}>Ten</MenuItem>
          <MenuItem value={30}>Twenty</MenuItem>
          <MenuItem value={40}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
};
