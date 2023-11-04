import { Box } from '@mantine/core';
import { Select as SelectComponent } from '.';
import { Wrapper } from '../../../molecules/storyWrapper';

export default {
  title: 'atoms/Select',
};

const data = ['React', 'Angular', 'Vue', 'Svelte'];

export const Select = () => (
  <Box>
    <Wrapper>
      <SelectComponent data={data} label="default" placeholder="placeholder" />
      <SelectComponent data={data} disabled label="disabled" placeholder="placeholder" />
      <SelectComponent data={data} label="error" error="error message" placeholder="placeholder" />
    </Wrapper>
  </Box>
);
