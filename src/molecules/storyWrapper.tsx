import { Box, Flex, Title } from '@mantine/core';
import { ReactNode } from 'react';

export const Wrapper = (props: { children: ReactNode; title?: string }) => (
  <Box>
    <Title p="sm" order={2}>
      {props.title}
    </Title>
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'left' }}
    >
      {props.children}
    </Flex>
  </Box>
);
