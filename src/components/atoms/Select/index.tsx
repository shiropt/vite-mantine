import { Select as MantineSelect, SelectProps } from '@mantine/core';
import { FC } from 'react';

type Props = SelectProps;

export const Select: FC<Props> = (props) => (
  <MantineSelect
    styles={{ label: { marginLeft: '4px' }, error: { marginLeft: '4px' } }}
    searchable
    {...props}
  />
);
