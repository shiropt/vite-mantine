import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mantine/core';
import { useEffect } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { Button } from '../components/atoms/Button';
import { useDispatch, useSelector } from '../hooks/redux';
import { actions } from '../modules/account';

export function HomePage() {
  const { logout, user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(actions.setAccount(user));
    }
  }, []);
  const account = useSelector((state) => state.account);

  return (
    <Box ta="center">
      <Welcome account={account} />
      <Button
        mt="xl"
        onClick={() => {
          logout();
        }}
      >
        ログアウト
      </Button>
    </Box>
  );
}
