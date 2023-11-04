import { Radio as MantineRadio, RadioProps } from '@mantine/core';
import { FC } from 'react';

type Props = Omit<RadioProps, 'color'>;

export const Radio: FC<Props> = (props) => (
  <MantineRadio color="green" size={props.size ?? 'md'} {...props} />
);
