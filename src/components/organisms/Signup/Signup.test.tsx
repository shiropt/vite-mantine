import { screen, render } from '@test-utils';
import { Signup } from '.';
import { areaLabel } from '../../../../test-utils/areaLabel';
import { path } from '../../../libs/Router/path';

const setup = () => {
  const { user } = render(<Signup />, { route: path.signup });
  const emailTextBox = screen.getByRole('textbox', { name: areaLabel.email });
  const passwordTextBox = screen.getByRole('textbox', { name: areaLabel.password });
  const signupButton = screen.getByRole('button', { name: areaLabel.signup });
  const loginLink = screen.getByRole('link', { name: areaLabel.login });

  return { user, emailTextBox, passwordTextBox, signupButton, loginLink };
};

describe('新規登録ページ入力チェック', () => {
  it('入力フォームが両方空の時にログインボタン押下でエラーメッセージが表示されること', async () => {
    const { user, signupButton } = setup();
    await user.click(signupButton);

    expect(screen.getByText('メールアドレスを入力してください')).toBeInTheDocument();
    expect(screen.getByText('パスワードを入力してください')).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.signup);
  });

  it('メールアドレスの形式が正しくない場合にエラーメッセージが表示されること', async () => {
    const { user, emailTextBox, signupButton } = setup();
    await user.type(emailTextBox, 'aaaaaaaaaa.aa');
    await user.click(signupButton);

    expect(screen.getByText('メールアドレスの形式が正しくありません')).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.signup);
  });

  it('パスワードが8文字以下の場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, signupButton } = setup();
    await user.type(passwordTextBox, '1234abC');
    await user.click(signupButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.signup);
  });

  it('パスワードが大文字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, signupButton } = setup();
    await user.type(passwordTextBox, '1234abcd');
    await user.click(signupButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.signup);
  });

  it('パスワードが小文字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, signupButton } = setup();
    await user.type(passwordTextBox, '1234ABCD');
    await user.click(signupButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.signup);
  });

  it('パスワードが数字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, signupButton } = setup();
    await user.type(passwordTextBox, 'ABCDEFGH');
    await user.click(signupButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.signup);
  });
});

describe('新規登録ページ遷移テスト', () => {
  it('メールアドレスとパスワードが正しく入力されていた場合にモーダルが表示され、OK押下でログインページへ遷移すること', async () => {
    const { user, emailTextBox, passwordTextBox, signupButton } = setup();
    await user.type(emailTextBox, 'test@email.co.jp');
    await user.type(passwordTextBox, '1234abcDE');
    await user.click(signupButton);
    await user.click(screen.getByText('OK'));
    expect(window.location.pathname).toBe(path.login);
  });

  it('「アカウントをお持ちの方」押下で/loginへ遷移する', async () => {
    const { user, loginLink } = setup();
    await user.click(loginLink);
    expect(window.location.pathname).toBe(path.login);
  });
  // TODO
  it('Googleログインテスト', () => {});
});
