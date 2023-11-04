import { Box, Flex, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const Center: FC<Props> = ({ title, children }) => (
  <Flex justify="center" bg="white" w="60%" mih={600}>
    <Box>
      <Flex justify="center">
        <Title mt="lg" p="lg" order={2}>
          {title}
        </Title>
      </Flex>
      <Flex p="lg" justify="center">
        {children}
      </Flex>
    </Box>
  </Flex>
);
