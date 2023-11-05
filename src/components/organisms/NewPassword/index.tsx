import { FC } from 'react';
import { ContainerProps, Flex } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { Center } from '../../molecules/Center';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { schema } from '../../../libs/zod/schema';
import { openOKButtonModal } from '../../molecules/Modals';
import { path } from '../../../libs/Router/path';

type Props = ContainerProps;

export const NewPassword: FC<Props> = (props) => {
  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      password: '',
    },
    validate: zodResolver(schema.newPassword),
  });
  const navigate = useNavigate();

  const openModal = () => {
    openOKButtonModal('新しいパスワードを登録しました。', () => navigate(path.root));
  };

  return (
    <Center {...props} title="新しいパスワードを設定">
      <Flex direction="column">
        <form onSubmit={onSubmit(openModal)}>
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
