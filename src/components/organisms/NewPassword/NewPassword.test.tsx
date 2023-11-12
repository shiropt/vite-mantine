import { screen, render } from '@test-utils';
import { NewPassword } from '.';
import { path } from '../../../libs/Router/path';

const setup = () => {
  const { user } = render(<NewPassword />, { route: path.newPassword });
  const passwordTextBox = screen.getByRole('textbox');
  const passwordRegisterButton = screen.getByRole('button');
  return { user, passwordTextBox, passwordRegisterButton };
};

describe('新しいパスワードを設定入力チェック', () => {
  it('入力フォームが空の時にボタン押下でエラーメッセージが表示されること', async () => {
    const { user, passwordRegisterButton } = setup();
    await user.click(passwordRegisterButton);
    expect(screen.getByText('パスワードを入力してください')).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.newPassword);
  });

  it('パスワードが8文字以下の場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, passwordRegisterButton } = setup();
    await user.type(passwordTextBox, '1234abC');
    await user.click(passwordRegisterButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.newPassword);
  });

  it('パスワードが大文字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, passwordRegisterButton } = setup();
    await user.type(passwordTextBox, '1234abcd');
    await user.click(passwordRegisterButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.newPassword);
  });

  it('パスワードが小文字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, passwordRegisterButton } = setup();
    await user.type(passwordTextBox, '1234ABCD');
    await user.click(passwordRegisterButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.newPassword);
  });

  it('パスワードが数字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, passwordRegisterButton } = setup();
    await user.type(passwordTextBox, 'ABCDEFGH');
    await user.click(passwordRegisterButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.newPassword);
  });
});

describe('新しいパスワードを設定ページ遷移テスト', () => {
  it('パスワードが正しく入力されていた場合にモーダルが表示され、OK押下でhomeへ遷移すること', async () => {
    const { user, passwordTextBox, passwordRegisterButton } = setup();
    await user.type(passwordTextBox, '1234abcDE');
    await user.click(passwordRegisterButton);
    await user.click(screen.getByText('OK'));
    expect(window.location.pathname).toBe(path.root);
  });
});
