import { Checkbox as MantineCheckbox, CheckboxProps } from '@mantine/core';
import { FC } from 'react';

type Props = Omit<CheckboxProps, 'color'>;

export const CheckBox: FC<Props> = (props) => (
  <MantineCheckbox color="green" size={props.size ?? 'md'} {...props} />
);
