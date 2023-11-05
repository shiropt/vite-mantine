import { FC } from 'react';
import { Flex, ContainerProps, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';
import { path } from '../../../libs/Router/path';

type Props = ContainerProps;

export const Login: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema.login),
  });

  return (
    <Center {...props} title="ログイン">
      <Flex direction="column">
        <form onSubmit={onSubmit(() => navigate(path.root))}>
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
            <Text ta="right">
              <Link to={path.passwordForgot}>パスワードをお忘れの方</Link>
            </Text>
          </Flex>
          <Flex direction="column">
            <Button mb="xl" type="submit">
              ログイン
            </Button>
            <Button onClick={() => {}} variant="outline">
              Googleでログイン
            </Button>
          </Flex>
        </form>
        <Text mt="xl" ta="center">
          <Link to={path.signup}>アカウントをお持ちでない方</Link>
        </Text>
      </Flex>
    </Center>
  );
};
