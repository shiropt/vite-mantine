import { screen, render } from '@test-utils';
import { PasswordForgot } from '.';
import { path } from '../../../libs/Router/path';

const setup = () => {
  const { user } = render(<PasswordForgot />, { route: path.passwordForgot });
  const emailTextBox = screen.getByRole('textbox');
  const passwordResetButton = screen.getByRole('button');
  return { user, emailTextBox, passwordResetButton };
};

describe('パスワードをお忘れの方入力チェック', () => {
  it('入力フォームが空の時にボタン押下でエラーメッセージが表示されること', async () => {
    const { user, passwordResetButton } = setup();
    await user.click(passwordResetButton);
    expect(screen.getByText('メールアドレスを入力してください')).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.passwordForgot);
  });

  it('メールアドレスの形式が正しくない場合にエラーメッセージが表示されること', async () => {
    const { user, emailTextBox, passwordResetButton } = setup();
    await user.type(emailTextBox, 'aaaaaaaaaa.aa');
    await user.click(passwordResetButton);

    expect(screen.getByText('メールアドレスの形式が正しくありません')).toBeInTheDocument();
    expect(window.location.pathname).toBe(path.passwordForgot);
  });
});

describe('パスワードをお忘れの方ページ遷移テスト', () => {
  it('メールアドレスが正しく入力されていた場合にモーダルが表示され、OK押下で新しいパスワード設定画面へ遷移すること', async () => {
    const { user, emailTextBox, passwordResetButton } = setup();
    await user.type(emailTextBox, 'test@email.co.jp');
    await user.click(passwordResetButton);
    await user.click(screen.getByText('OK'));
    expect(window.location.pathname).toBe(path.newPassword);
  });
});
