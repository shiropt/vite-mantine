import { screen, render } from '@test-utils';
import { Login } from '.';
import { areaLabel } from '../../../../test-utils/areaLabel';
import { path } from '../../../libs/Router/path';

const setup = () => {
  const { user } = render(<Login />, { route: path.login });
  const emailTextBox = screen.getByRole('textbox', { name: areaLabel.email });
  const passwordTextBox = screen.getByRole('textbox', { name: areaLabel.password });
  const loginButton = screen.getByRole('button', { name: areaLabel.login });
  const passwordForgotLink = screen.getByRole('link', { name: areaLabel.passwordForgot });
  const signupLink = screen.getByRole('link', { name: areaLabel.signup });

  return { user, emailTextBox, passwordTextBox, loginButton, passwordForgotLink, signupLink };
};

describe('ログインページ入力チェック', () => {
  it('入力フォームが両方空の時にログインボタン押下でエラーメッセージが表示されること', async () => {
    const { user, loginButton } = setup();
    await user.click(loginButton);

    expect(screen.getByText('メールアドレスを入力してください')).toBeInTheDocument();
    expect(screen.getByText('パスワードを入力してください')).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.login);
  });

  it('メールアドレスの形式が正しくない場合にエラーメッセージが表示されること', async () => {
    const { user, emailTextBox, loginButton } = setup();
    await user.type(emailTextBox, 'aaaaaaaaaa.aa');
    await user.click(loginButton);

    expect(screen.getByText('メールアドレスの形式が正しくありません')).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.login);
  });

  it('パスワードが8文字以下の場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, loginButton } = setup();
    await user.type(passwordTextBox, '1234abC');
    await user.click(loginButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.login);
  });

  it('パスワードが大文字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, loginButton } = setup();
    await user.type(passwordTextBox, '1234abcd');
    await user.click(loginButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.login);
  });

  it('パスワードが小文字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, loginButton } = setup();
    await user.type(passwordTextBox, '1234ABCD');
    await user.click(loginButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.login);
  });

  it('パスワードが数字を含んでいない場合にエラーメッセージが表示されること', async () => {
    const { user, passwordTextBox, loginButton } = setup();
    await user.type(passwordTextBox, 'ABCDEFGH');
    await user.click(loginButton);

    expect(
      screen.getByText('パスワードは8文字以上、大文字、小文字、数字を含む必要があります')
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.login);
  });
});

describe('ログインページ遷移テスト', () => {
  it('メールアドレスとパスワードが正しく入力されていた場合にルートへ遷移すること', async () => {
    const { user, emailTextBox, passwordTextBox, loginButton } = setup();
    await user.type(emailTextBox, 'test@email.co.jp');
    await user.type(passwordTextBox, '1234abcDE');
    await user.click(loginButton);

    expect(window.location.pathname).toBe('/');
  });

  it('「パスワードをお忘れの方」押下で/password-forgotへ遷移する', async () => {
    const { user, passwordForgotLink } = setup();
    await user.click(passwordForgotLink);
    expect(window.location.pathname).toBe(path.passwordForgot);
  });

  it('「アカウントをお持ちでない方」押下で/signupへ遷移する', async () => {
    const { user, signupLink } = setup();
    await user.click(signupLink);
    expect(window.location.pathname).toBe(path.signup);
  });
  // TODO
  it('Googleログインテスト', () => {});
});
