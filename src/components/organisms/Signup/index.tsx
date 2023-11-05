import { FC } from 'react';
import { ContainerProps, Flex, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link } from 'react-router-dom';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';
import { path } from '../../../libs/Router/path';

type Props = ContainerProps;

export const Signup: FC<Props> = (props) => {
  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema.signup),
  });
  return (
    <Center {...props} title="アカウント登録">
      <Flex direction="column">
        <form onSubmit={onSubmit((values) => console.log(values))}>
          <Flex direction="column" mb="md">
            <Input
              mb="xs"
              label="メールアドレス"
              placeholder="メールアドレスを入力してください"
              w="400"
              {...getInputProps('email')}
            />
            <Input
              mb="xs"
              label="パスワード"
              placeholder="パスワードを入力してください"
              w="400"
              {...getInputProps('password')}
            />
          </Flex>
          <Flex direction="column">
            <Button mb="xl" type="submit">
              新規登録
            </Button>
            <Button onClick={() => {}} variant="outline">
              Googleで新規登録
            </Button>
          </Flex>
        </form>
        <Text mt="xl" ta="center">
          <Link to={path.login}>アカウントをお持ちの方</Link>
        </Text>
      </Flex>
    </Center>
  );
};
