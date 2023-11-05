import { Button as MantineButton, ButtonProps, MantineColor, ButtonVariant } from '@mantine/core';
import { ComponentProps, FC } from 'react';

type Color = Extract<MantineColor, 'red' | 'green' | 'gray'>;

type Variant = Extract<ButtonVariant, 'default' | 'filled' | 'outline'>;

type Props = ButtonProps & {
  color?: Color;
  variant?: Variant;
} & ComponentProps<'button'>;

export const Button: FC<Props> = ({ ref, ...props }) => (
  <MantineButton size={props.size ?? 'md'} {...props}>
    {props.children}
  </MantineButton>
);
