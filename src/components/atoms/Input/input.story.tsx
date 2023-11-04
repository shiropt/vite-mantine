import { Box } from '@mantine/core';
import { Input as InputComponent } from '.';
import { Wrapper } from '../../molecules/storyWrapper';

export default {
  title: 'atoms/Input',
};

export const Input = () => (
  <Box>
    <Wrapper>
      <InputComponent label="default" placeholder="placeholder" />
      <InputComponent disabled label="disabled" placeholder="placeholder" />
      <InputComponent label="error" error="error message" placeholder="placeholder" />
    </Wrapper>
  </Box>
);
