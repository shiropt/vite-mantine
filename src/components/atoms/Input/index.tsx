import { Input as MantineInput, InputWrapperProps, InputProps } from '@mantine/core';
import { ComponentProps, FC } from 'react';

type Props = InputProps & InputWrapperProps & ComponentProps<'input'>;

export const Input: FC<Props> = ({ ref, ...props }) => (
  <MantineInput.Wrapper
    styles={{ label: { marginLeft: '4px' }, error: { marginLeft: '4px' } }}
    {...props}
  >
    <MantineInput {...props} />
  </MantineInput.Wrapper>
);
