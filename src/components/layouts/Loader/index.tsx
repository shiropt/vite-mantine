import { LoadingOverlay } from '@mantine/core';
import { FC } from 'react';

type Props = {
  visible?: boolean;
};

export const Loader: FC<Props> = ({ visible = true }) => <LoadingOverlay visible={visible} />;
