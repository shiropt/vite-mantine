import { FC } from 'react';
import { ContainerProps, Flex, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';
import { path } from '../../../libs/Router/path';
import { openOKButtonModal } from '../../molecules/Modals';
import { ariaLabel } from '../../../../test-utils/ariaLabel';

type Props = ContainerProps;

export const Signup: FC<Props> = (props) => {
  const {
    onSubmit,
    getInputProps,
    values: { email, password },
  } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema.signup),
  });
  const navigate = useNavigate();

  const openModal = () => {
    openOKButtonModal(
      <>
        アカウント登録確認メールを送信しました。 <br />
        認証を完了後ログインしてください。
      </>,
      () => navigate(path.login, { state: { email, password } })
    );
  };
  return (
    <Center {...props} title="アカウント登録">
      <Flex direction="column">
        <form onSubmit={onSubmit(openModal)}>
          <Flex direction="column" mb="md">
            <Input
              aria-label={ariaLabel.email}
              mb="xs"
              label="メールアドレス"
              placeholder="メールアドレスを入力してください"
              w="400"
              {...getInputProps('email')}
            />
            <Input
              aria-label={ariaLabel.password}
              mb="xs"
              label="パスワード"
              placeholder="パスワードを入力してください"
              w="400"
              {...getInputProps('password')}
            />
          </Flex>
          <Flex direction="column">
            <Button aria-label={ariaLabel.signup} mb="xl" type="submit">
              新規登録
            </Button>
            <Button variant="outline">Googleで新規登録</Button>
          </Flex>
        </form>
        <Text mt="xl" ta="center">
          <Link aria-label={ariaLabel.login} to={path.login}>
            アカウントをお持ちの方
          </Link>
        </Text>
      </Flex>
    </Center>
  );
};
