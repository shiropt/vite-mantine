import { FC } from 'react';
import { ContainerProps, Flex } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';

type Props = ContainerProps;

export const NewPassword: FC<Props> = (props) => {
  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      password: '',
    },
    validate: zodResolver(schema.newPassword),
  });

  return (
    <Center {...props} title="新しいパスワードを設定">
      <Flex direction="column">
        <form onSubmit={onSubmit((values) => console.log(values))}>
          <Flex direction="column" mb="md">
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
              新しいパスワードを登録する
            </Button>
          </Flex>
        </form>
      </Flex>
    </Center>
  );
};
