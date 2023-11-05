import { Box, Container, Flex, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const Center: FC<Props> = ({ title, children }) => (
  <Container bg="white" size="xs" p="md">
    <Flex justify="center">
      <Box>
        <Flex justify="center">
          <Title p="md" order={2}>
            {title}
          </Title>
        </Flex>
        <Flex p="lg" justify="center">
          {children}
        </Flex>
      </Box>
    </Flex>
  </Container>
);
