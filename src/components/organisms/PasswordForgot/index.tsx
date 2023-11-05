import { FC } from 'react';
import { Flex } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';

type Props = {};

export const PasswordForgot: FC<Props> = () => {
  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      email: '',
    },
    validate: zodResolver(schema.passwordForgot),
  });

  return (
    <Center title="パスワードをお忘れの方">
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
          </Flex>
          <Flex direction="column">
            <Button mb="xl" type="submit">
              パスワードを再設定する
            </Button>
          </Flex>
        </form>
      </Flex>
    </Center>
  );
};
