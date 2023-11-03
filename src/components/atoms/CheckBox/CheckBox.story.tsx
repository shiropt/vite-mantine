import { Box } from '@mantine/core';
import { Wrapper } from '../../../molecules/storyWrapper';
import { CheckBox as CheckBoxComponent } from '.';

export default {
  title: 'atoms/CheckBox',
};

export const CheckBox = () => (
  <Box>
    <Wrapper>
      <CheckBoxComponent label="unchecked" />
      <CheckBoxComponent label="checked" checked />
      <CheckBoxComponent label="disabled" disabled />
    </Wrapper>
  </Box>
);
