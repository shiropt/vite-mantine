import { Box } from '@mantine/core';
import { Button as ButtonComponent } from '.';
import { Wrapper } from '../../../molecules/storyWrapper';

export default {
  title: 'atoms/Button',
};

export const Button = () => (
  <Box>
    <Wrapper title="filled">
      <ButtonComponent>primary</ButtonComponent>
      <ButtonComponent color="red">red</ButtonComponent>
      <ButtonComponent color="green">green</ButtonComponent>
      <ButtonComponent color="gray">gray</ButtonComponent>
    </Wrapper>
    <Wrapper title="outline">
      <ButtonComponent variant="outline">primary</ButtonComponent>
      <ButtonComponent variant="outline" color="red">
        red
      </ButtonComponent>
      <ButtonComponent variant="outline" color="green">
        green
      </ButtonComponent>
      <ButtonComponent variant="outline" color="gray">
        gray
      </ButtonComponent>
    </Wrapper>
    <Wrapper title="default">
      <ButtonComponent variant="default">default</ButtonComponent>
    </Wrapper>
    <Wrapper title="disabled">
      <ButtonComponent disabled variant="default">
        primary
      </ButtonComponent>
    </Wrapper>
    <Wrapper title="loading">
      <ButtonComponent loading variant="default">
        primary
      </ButtonComponent>
    </Wrapper>
  </Box>
);
