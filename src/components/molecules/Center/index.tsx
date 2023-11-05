import { Box, Container, Flex, Title, ContainerProps } from '@mantine/core';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
} & ContainerProps;

export const Center: FC<Props> = ({ title, children, ...rest }) => (
  <Container {...rest} bg="white" size="xs" p="md">
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
