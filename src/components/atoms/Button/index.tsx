import { Button as MantineButton, ButtonProps, MantineColor, ButtonVariant } from '@mantine/core';
import { FC } from 'react';

type Color = Extract<MantineColor, 'red' | 'green' | 'gray'>;

type Variant = Extract<ButtonVariant, 'default' | 'filled' | 'outline'>;

interface Props extends ButtonProps {
  color?: Color;
  variant?: Variant;
}

export const Button: FC<Props> = (props) => (
  <MantineButton size={props.size ?? 'md'} {...props}>
    {props.children}
  </MantineButton>
);
