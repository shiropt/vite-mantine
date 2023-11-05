import { Box, Text } from '@mantine/core';
import { ContextModalProps, modals } from '@mantine/modals';
import { ReactNode } from 'react';
import { Button } from '../../atoms/Button';

type ConTextModal = 'OKButtonModal';

export const OKButtonModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <Box>
    <Text mt="md" ta="center">
      {innerProps.modalBody}
    </Text>
    <Box p="lg" mx="md">
      <Button
        fullWidth
        mt="sm"
        onClick={() => {
          context.closeModal(id);
        }}
      >
        OK
      </Button>
    </Box>
  </Box>
);

export const openOKButtonModal = (modalBody: ReactNode, onClose: VoidFunction) => {
  modals.openContextModal<ConTextModal>({
    centered: true,
    closeOnClickOutside: false,
    withCloseButton: false,
    modal: 'OKButtonModal',
    innerProps: {
      modalBody,
    },
    onClose: () => setTimeout(onClose),
  });
};
