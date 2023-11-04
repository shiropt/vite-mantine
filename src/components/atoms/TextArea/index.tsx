import { Textarea as MantineTextArea, TextareaProps } from '@mantine/core';
import { FC } from 'react';

type Props = TextareaProps;

export const TextArea: FC<Props> = (props) => (
  <MantineTextArea
    styles={{ label: { marginLeft: '4px' }, error: { marginLeft: '4px' } }}
    {...props}
  />
);
