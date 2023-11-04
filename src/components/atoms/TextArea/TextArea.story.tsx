import { Box } from '@mantine/core';
import { TextArea as TextAreaComponent } from '.';
import { Wrapper } from '../../../molecules/storyWrapper';

export default {
  title: 'atoms/TextArea',
};

export const TextArea = () => (
  <Box>
    <Wrapper>
      <TextAreaComponent label="default" placeholder="placeholder" />
      <TextAreaComponent disabled label="disabled" placeholder="placeholder" />
      <TextAreaComponent label="error" error="error message" placeholder="placeholder" />
    </Wrapper>
  </Box>
);
