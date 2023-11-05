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

export const PasswordForgot: FC<Props> = (props) => {
  const {
    onSubmit,
    getInputProps,
    values: { email },
  } = useForm({
    initialValues: {
      email: '',
    },
    validate: zodResolver(schema.passwordForgot),
  });
  const navigate = useNavigate();

  const openModal = () => {
    openOKButtonModal(
      <p>
        パスワード再設定メールを送信しました。 <br />
        内容をご確認の上、新しいパスワードを設定してください。
      </p>,
      () => navigate(path.newPassword, { state: { email } })
    );
  };

  return (
    <Center {...props} title="パスワードをお忘れの方">
      <Flex direction="column">
        <form onSubmit={onSubmit(openModal)}>
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
