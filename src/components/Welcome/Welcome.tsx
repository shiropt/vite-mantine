import { Title, Text } from '@mantine/core';
import { FC } from 'react';
import classes from './Welcome.module.css';
import { Account } from '../../modules/account/type';

type Props = {
  account: Account;
};

export const Welcome: FC<Props> = ({ account }) => (
  <>
    <Title className={classes.title} ta="center" mt={100}>
      Welcome to{' '}
      <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
        Mantine
      </Text>
    </Title>
    <Text> hello {account.name}</Text>
    <Text>
      <img alt="icon" src={account.picture}></img>
    </Text>
  </>
);
