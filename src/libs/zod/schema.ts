import { z } from 'zod';

const validates = {
  email: z
    .string()
    .email({ message: 'メールアドレスの形式が正しくありません' })
    .min(1, { message: 'メールアドレスを入力してください' }),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message: 'パスワードは8文字以上、大文字、小文字、数字を含む必要があります',
    })
    .min(1, { message: 'パスワードを入力してください' }),
} as const;

export const schema = {
  login: z.object({
    email: validates.email,
    password: validates.password,
  }),
  signup: z.object({
    email: validates.email,
    password: validates.password,
  }),
  passwordForgot: z.object({
    email: validates.email,
  }),
  newPassword: z.object({
    password: validates.password,
  }),
} as const;
