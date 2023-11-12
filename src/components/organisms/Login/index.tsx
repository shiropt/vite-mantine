import { FC, useEffect } from 'react';
import { Flex, ContainerProps, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';
import { path } from '../../../libs/Router/path';
import { areaLabel } from '../../../../test-utils/areaLabel';

type Props = ContainerProps;

export const Login: FC<Props> = (props) => {
  const navigate = useNavigate();
  const locationState = useLocation().state as { email: string; password: string };

  const { onSubmit, getInputProps, setValues } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema.login),
  });
  useEffect(() => {
    setValues({ email: locationState?.email ?? '', password: locationState?.password ?? '' });
  }, []);

  return (
    <Center {...props} title="ログイン">
      <Flex direction="column">
        <form onSubmit={onSubmit(() => navigate(path.root))}>
          <Flex direction="column" mb="md">
            <Input
              aria-label={areaLabel.email}
              mb="xs"
              label="メールアドレス"
              placeholder="メールアドレスを入力してください"
              w="400"
              {...getInputProps('email')}
            />
            <Input
              aria-label={areaLabel.password}
              mb="xs"
              label="パスワード"
              placeholder="パスワードを入力してください"
              w="400"
              {...getInputProps('password')}
            />
            <Text ta="right">
              <Link aria-label={areaLabel.passwordForgot} to={path.passwordForgot}>
                パスワードをお忘れの方
              </Link>
            </Text>
          </Flex>
          <Flex direction="column">
            <Button aria-label={areaLabel.login} mb="xl" type="submit">
              ログイン
            </Button>
            <Button onClick={() => {}} variant="outline">
              Googleでログイン
            </Button>
          </Flex>
        </form>
        <Text mt="xl" ta="center">
          <Link aria-label={areaLabel.signup} to={path.signup}>
            アカウントをお持ちでない方
          </Link>
        </Text>
      </Flex>
    </Center>
  );
};
