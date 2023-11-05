import { FC } from 'react';
import { Anchor, Flex } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';

type Props = {};

export const Login: FC<Props> = () => {
  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema.login),
  });

  return (
    <Center title="ログイン">
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
            <Anchor ta="right" onClick={() => {}}>
              パスワードをお忘れの方
            </Anchor>
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
        <Anchor mt="xl" ta="center" onClick={() => {}}>
          アカウントをお持ちでない方
        </Anchor>
      </Flex>
    </Center>
  );
};
