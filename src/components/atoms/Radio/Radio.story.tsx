import { Box } from '@mantine/core';
import { Wrapper } from '../../../molecules/storyWrapper';
import { Radio as RadioComponent } from '.';

export default {
  title: 'atoms/Radio',
};

export const Radio = () => (
  <Box>
    <Wrapper>
      <RadioComponent label="unchecked" />
      <RadioComponent label="checked" checked />
      <RadioComponent label="disabled" disabled />
    </Wrapper>
  </Box>
);
